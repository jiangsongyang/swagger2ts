import { resolve } from 'node:path';
import colors from 'picocolors';

/* eslint no-console: 0 */
const output = (type, msg) => {
    const prefix = 'logger';
    /* eslint no-nested-ternary: 0 */
    const tag = type === 'info'
        ? colors.cyan(colors.bold(prefix))
        : type === 'warn'
            ? colors.yellow(colors.bold(prefix))
            : colors.red(colors.bold(prefix));
    console[type](`${colors.bgWhite(colors.bold(new Date().toLocaleTimeString()))} : ${tag} - ${msg}`);
};
function createLogger() {
    const warnedMessages = new Set();
    const logger = {
        info(msg) {
            output('info', msg);
        },
        warn(msg) {
            output('warn', msg);
        },
        warnOnce(msg) {
            if (warnedMessages.has(msg))
                return;
            output('warn', msg);
            warnedMessages.add(msg);
        },
        error(msg) {
            output('error', msg);
        }
    };
    return logger;
}

const logger = createLogger();
const resolveOptions = (options) => {
    const { name, output, httpClientType, input, url } = options;
    if (!input && !url) {
        logger.warn('You must provide either an input file or a url');
        process.exit(1);
    }
    const resolved = {
        name,
        inputFileContent: '',
        output,
        httpClientType,
        input,
        url
    };
    return Promise.resolve(resolved);
};

const swagger2ts = async (options) => {
    const resolvedOptions = await resolveOptions(options);
    console.log('resolvedOptions: ', resolvedOptions);
};
swagger2ts({
    name: 'MySuperbApi.ts',
    output: resolve(process.cwd(), './__generated__'),
    // input: resolve(process.cwd(), '../src/mock/base.json'),
    httpClientType: 'axios'
});

export { swagger2ts };
//# sourceMappingURL=swagger2ts.esm.js.map
