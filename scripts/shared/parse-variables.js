const isSANB = (value) => {
    if(!value) return false;
    if(typeof value != "string") return false
    return value !== "";
}

const DEFAULT_OPTIONS = {
    assignToProcessEnv: true,
    overrideProcessEnv: false,
    ignoreFunctions: true
};

const parse = (env, options) => {
    const envOptions = { ...DEFAULT_OPTIONS, ...(options || {}) };

    const parsed = {};

    for (const key of Object.keys(env)) {
        if (envOptions.ignoreFunctions && typeof env[key] === 'function') {
            continue;
        }

        parsed[key] = parseKey(env[key], key);
        if (envOptions.assignToProcessEnv === true) {
            if (envOptions.overrideProcessEnv === true) {
                process.env[key] = parsed[key] || process.env[key];
            } else {
                process.env[key] = process.env[key] || parsed[key];
            }
        }
    }

    return parsed;
};

exports.parseVariables =  parse

function parseKey(value, key) {
    // if the value is wrapped in bacticks e.g. (`value`) then just return its value
    if (
        value.toString().indexOf('`') === 0 &&
        value.toString().lastIndexOf('`') === value.toString().length - 1
    ) {
        return value.toString().slice(1, value.toString().length - 1);
    }

    // if the value ends in an asterisk then just return its value
    if (
        value.toString().lastIndexOf('*') === value.toString().length - 1 &&
        !value.toString().includes(',')
    ) {
        return value.toString().slice(0, Math.max(0, value.toString().length - 1));
    }

    // Boolean
    if (
        value.toString().toLowerCase() === 'true' ||
        value.toString().toLowerCase() === 'false'
    ) {
        return value.toString().toLowerCase() === 'true';
    }

    // Number
    if (isSANB(value) && !Number.isNaN(Number(value))) {
        return Number(value);
    }

    // Array
    if (
        (Array.isArray(value) || typeof value === 'string') &&
        typeof value.includes === 'function' &&
        value.includes(',')
    ) {
        return value
            .split(',')
            .filter((string) => {
                return string !== '';
            })
            .map((string) => parseKey(string));
    }

    return value;
}