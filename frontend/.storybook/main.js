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
        },
        {
            test: /\.(woff|woff2|eot|ttf)$/,
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
            include: path.resolve(__dirname, '../public/fonts')
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
          });
        config.resolve.extensions.push(".ts", ".tsx",".scss",".ttf");
        return config;
    },
};
