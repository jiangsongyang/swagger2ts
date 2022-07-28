'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var node_path = require('node:path');
var colors = require('picocolors');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var colors__default = /*#__PURE__*/_interopDefaultLegacy(colors);

/* eslint no-console: 0 */
const output = (type, msg) => {
    const prefix = 'logger';
    /* eslint no-nested-ternary: 0 */
    const tag = type === 'info'
        ? colors__default["default"].cyan(colors__default["default"].bold(prefix))
        : type === 'warn'
            ? colors__default["default"].yellow(colors__default["default"].bold(prefix))
            : colors__default["default"].red(colors__default["default"].bold(prefix));
    console[type](`${colors__default["default"].bgWhite(colors__default["default"].bold(new Date().toLocaleTimeString()))} : ${tag} - ${msg}`);
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
    output: node_path.resolve(process.cwd(), './__generated__'),
    // input: resolve(process.cwd(), '../src/mock/base.json'),
    httpClientType: 'axios'
});

exports.swagger2ts = swagger2ts;
//# sourceMappingURL=swagger2ts.cjs.js.map
