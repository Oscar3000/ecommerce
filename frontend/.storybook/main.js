const path = require('path');
module.exports = {
    stories: ['../src/components/**/**/*.stories.tsx'],
        webpackFinal: async config => {
          config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
              {
                loader: require.resolve('awesome-typescript-loader'),
                options:{
                  configFileName: path.resolve(__dirname, './tsconfig.json')
                }
              },
              // Optional
              {
                loader: require.resolve('react-docgen-typescript-loader'),
                options:{
                  tsconfigPath: path.resolve(__dirname, './tsconfig.json'),

                }
              },
            ],
          });
          config.resolve.extensions.push('.ts', '.tsx');
          return config;
        },
        };