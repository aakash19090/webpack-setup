const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development'
let target = 'web'

if(process.env.NODE_ENV === 'production'){
    mode = 'production'
    let target = 'browserslist'
}

module.exports={
    mode: mode,
    target: target,

    output:{
        // To save Images in "images" directory in 'dist' folder
        assetModuleFilename: 'images/[hash][ext][query]'    
    },

    module: {
        rules:[
            {   
                // To save Images in "images" directory in 'dist' folder
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader' ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    },

    devtool: 'source-map',

    devServer: {
        contentBase : './dist',
        hot: true
    },

    plugins: [
        new MiniCssExtractPlugin()
    ],

    resolve:{
        extensions: ['.js', '.jsx'],
    }
}