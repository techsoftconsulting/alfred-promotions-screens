const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: ['@teovilla/react-native-web-maps']
        }
    }, argv);
    // Customize the config before returning it.
    config.resolve.alias['react-native-maps'] = '@teovilla/react-native-web-maps';

    return config;
};
