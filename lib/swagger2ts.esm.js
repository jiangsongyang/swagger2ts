import { readFileSync, writeFileSync } from 'node:fs';
import colors from 'picocolors';
import ejs from 'ejs';
import { resolve } from 'node:path';

const transformType = (type) => {
    let res = '';
    switch (type) {
        case 'integer':
            res = 'number';
            break;
        default:
            res = type;
            break;
    }
    return res;
};

const transformParameters = (rowParameters) => {
    let res = '';
    rowParameters.forEach((parameter) => {
        const { name, description, required, type: rowType, schema } = parameter;
        const type = rowType
            ? {}
            : {
                is$ref: true,
                type: schema?.$ref?.replace('#/definitions/', '')
            };
        const isArray = type === 'array';
        res += `\n${description ? '/** ' + description + ' */' : ''}\n${name}${required ? '' : '?'}: ${transformType(type)}${isArray ? '[]' : ''}, \n`;
    });
    return res;
};
const transformResponses = (responses) => {
    const succResponses = responses['200'];
    const { $ref, type } = succResponses.schema;
    if ($ref) {
        return $ref.replace('#/definitions/', '');
    }
    else {
        return transformType(type);
    }
};
const transformPaths = (paths) => {
    const res = [];
    for (const path in paths) {
        const pathItem = paths[path];
        Object.keys(pathItem).forEach((method) => {
            const { operationId, produces, parameters: rowParameters, responses } = pathItem[method];
            const parameters = transformParameters(rowParameters);
            const response = transformResponses(responses);
            res.push({
                method,
                apiName: operationId,
                produces,
                parameters,
                response
            });
        });
    }
    return res;
};
const transformDefinitions = (definitions) => {
    const res = [];
    console.log('definitions: ', definitions);
    return res;
};
const parseSwagger = (swaggerJsonStr) => {
    const swaggerJson = JSON.parse(swaggerJsonStr);
    const { swagger, info, paths, definitions } = swaggerJson;
    const swaggerInfo = {
        swaggerVersion: swagger,
        info
    };
    const pathsResult = transformPaths(paths);
    const interfaces = transformDefinitions(definitions);
    return {
        swaggerInfo,
        pathsResult,
        interfaces
    };
};

/* eslint no-console: 0 */
const output = (type, msg) => {
    const prefix = 'swagger2ts';
    /* eslint no-nested-ternary: 0 */
    const tag = type === 'info'
        ? colors.cyan(colors.bold(prefix))
        : type === 'warn'
            ? colors.yellow(colors.bold(prefix))
            : colors.red(colors.bold(prefix));
    console[type](`${colors.bgWhite(colors.bold(new Date().toLocaleTimeString()))} : ${tag}  ` + '\n\t' + `${msg}`);
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
const resolveOptions = async (options) => {
    const { name, output, httpClientType, input, url } = options;
    if (!input && !url) {
        logger.error('You must provide either an input file or a url');
        process.exit(1);
    }
    let swaggerJson = null;
    if (input) {
        swaggerJson = readFileSync(input, 'utf8');
        if (!swaggerJson) {
            logger.error(`Could not read file in this path : ${input}`);
            process.exit(1);
        }
    }
    const res = await parseSwagger(swaggerJson);
    const resolved = {
        name,
        ...res,
        output,
        httpClientType,
        input,
        url
    };
    return resolved;
};

const genCode = async (resolvedConfig) => {
    const { pathsResult } = resolvedConfig;
    const template = readFileSync(resolve(__dirname, '../templates/api.ejs'), 'utf-8');
    try {
        const buffer = ejs.render(template, {
            pathsResult,
            interfaces: []
        });
        const { name } = resolvedConfig;
        await writeFileSync(`${name}`, buffer);
    }
    catch (e) {
        console.log(e);
    }
};

const swagger2ts = async (options) => {
    const resolvedOptions = await resolveOptions(options);
    await genCode(resolvedOptions);
};

export { swagger2ts };
//# sourceMappingURL=swagger2ts.esm.js.map
