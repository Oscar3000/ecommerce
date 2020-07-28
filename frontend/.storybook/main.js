const path = require("path");
module.exports = {
    stories: ["../src/components/**/**/*.stories.tsx"],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve("babel-loader"),
                    options: {
                        presets: [require.resolve("babel-preset-react-app")],
                    },
                },
            ],
        });
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
          });

        config.resolve.extensions.push(".ts", ".tsx",".scss");
        return config;
    },
};
