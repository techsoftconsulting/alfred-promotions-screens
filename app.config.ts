import { parseVariables } from './scripts/shared/parse-variables';

const configurations = require('./app.json');
const dotenv = require('dotenv');

const root = '.';

const envFile = `${root}/.env`;

const envParams = getRequiredParams({
    selectedEnvFilePath: envFile
});

if (!envParams?.ENV) {
    throw new Error('Please, create a .env file with ENV=environment');
}

const selectedEnvFilePath = `${root}/.env.${envParams?.ENV}`;

const variables = getRequiredParams({
    selectedEnvFilePath
});

function getRequiredParams({ selectedEnvFilePath }) {

    let env = dotenv.config({
        path: selectedEnvFilePath
    });

    if (env.error) throw env.error;
    env = parseVariables(env.parsed);

    return env;
}

const fn = ({ config }) => {
    const currentConfig = {
        ...configurations,
        expo: { ...configurations.expo, extra: { ...variables } }
    };

    return currentConfig;
};

export default fn;
