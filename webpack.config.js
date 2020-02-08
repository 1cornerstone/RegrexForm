const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports ={
    plugins: [ new MiniCssExtractPlugin()],
    entry: './src/index.js',
    watch: true,
    mode: 'development',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|css|sass|scss)$/,
                exclude: [/node_modules /,/cypress/,/screenshot/],
                use: [
                    'babel-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    'css-loader',
                   ],



            }
        ]

    }
};