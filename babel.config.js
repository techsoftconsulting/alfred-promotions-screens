module.exports = function(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            '@babel/plugin-proposal-export-namespace-from',
            'react-native-reanimated/plugin',
            /*  'inline-dotenv',*/
            [
                'module-resolver',
                {
                    root: ['./src'],
                    extensions: [
                        '.ios.ts',
                        '.android.ts',
                        '.ts',
                        '.ios.tsx',
                        '.android.tsx',
                        '.tsx',
                        '.jsx',
                        '.js',
                        '.json'
                    ],
                    alias: {
                        '@modules': './src/modules',
                        '@navigation': './src/navigation',
                        '@main-components':
                            './src/modules/_shared/ui/components',
                        '@images': './src/utils/constants/images',
                        '@assets': './src/assets',
                        '@utils': './src/modules/_shared/domain/utils',
                        '@shared': './src/modules/_shared'
                    }
                }
            ],
            [
                'module:react-native-dotenv',
                {
                    moduleName: '@env',
                    path: '.env',
                    blacklist: null,
                    whitelist: null,
                    safe: false,
                    allowUndefined: true
                }
            ],
            require.resolve('expo-router/babel')
        ]
    };
};
