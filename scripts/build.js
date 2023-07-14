const { createFileFromTemplate } = require('./shared/create-file-from-template');
const { getArgs } = require('./shared/get-args');
const { parseVariables } = require('./shared/parse-variables');
const { writeFile } = require('fs');
const dotenv = require('dotenv');

const { args } = getArgs();
const [selectedEnv] = args;

const root = '.';
const rootEnvFile = `${root}/.env`;
const selectedEnvFilePath = `${root}/.env.${selectedEnv}`;

const params = getRequiredParams({
    selectedEnvFilePath
});

const bath = [
    createEnvFile({
        env: selectedEnv,
        envFilePath: rootEnvFile
    }),
    createAppConfigurationFile({
        requiredParams: params
    })
];

Promise.all(bath).then(() => {
    console.log('Successfully done!');
});

function createEnvFile({ envFilePath, env }) {
    return new Promise((resolve, reject) => {

        writeFile(envFilePath, `ENV=${env}`, { flag: 'w' }, function(err) {
            if (err) {
                throw err;
            }

            resolve();
        });
    });
}

function createAppConfigurationFile({
    requiredParams
}) {
    const appScheme = `${root}/app.scheme.json`;

    return createFileFromTemplate({
        ext: 'json',
        fileName: 'app',
        folderPath: `${root}/`,
        onReplace(data) {
            const finalData = Object.keys(requiredParams).reduce((data, param) => {
                return data.replaceAll(`{{${param}}}`, params[param]);
            }, data);
            return finalData;
        },
        replaceName: '',
        template: appScheme
    });
}

function getRequiredParams({ selectedEnvFilePath }) {

    let env = dotenv.config({
        path: selectedEnvFilePath
    });

    if (env.error) throw env.error;
    env = parseVariables(env.parsed);

    const requiredParams = [
        /*     "GOOGLE_SERVICES_ANDROID_PATH",
             "GOOGLE_SERVICES_IOS_PATH",*/
        /* 'ANDROID_PACKAGE',
         'IOS_BUNDLE_ID'*/
    ];

    return requiredParams.reduce((currentParams, key) => {
        if (!env[key]) throw new Error(`${key} was not found in environment variables`);

        return {
            ...currentParams,
            [key]: env[key] ?? ''
        };
    }, {});
}