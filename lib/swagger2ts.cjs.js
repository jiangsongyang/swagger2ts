'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var node_fs = require('node:fs');
var colors = require('picocolors');
var ejs = require('ejs');
var node_path = require('node:path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var colors__default = /*#__PURE__*/_interopDefaultLegacy(colors);
var ejs__default = /*#__PURE__*/_interopDefaultLegacy(ejs);

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
        ? colors__default["default"].cyan(colors__default["default"].bold(prefix))
        : type === 'warn'
            ? colors__default["default"].yellow(colors__default["default"].bold(prefix))
            : colors__default["default"].red(colors__default["default"].bold(prefix));
    console[type](`${colors__default["default"].bgWhite(colors__default["default"].bold(new Date().toLocaleTimeString()))} : ${tag}  ` + '\n\t' + `${msg}`);
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
        swaggerJson = node_fs.readFileSync(input, 'utf8');
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
    const template = node_fs.readFileSync(node_path.resolve(__dirname, '../templates/api.ejs'), 'utf-8');
    try {
        const buffer = ejs__default["default"].render(template, {
            pathsResult,
            interfaces: []
        });
        const { name } = resolvedConfig;
        await node_fs.writeFileSync(`${name}`, buffer);
    }
    catch (e) {
        console.log(e);
    }
};

const swagger2ts = async (options) => {
    const resolvedOptions = await resolveOptions(options);
    await genCode(resolvedOptions);
};

exports.swagger2ts = swagger2ts;
//# sourceMappingURL=swagger2ts.cjs.js.map
