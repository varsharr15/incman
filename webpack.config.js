var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack')
//const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode: 'production',
    resolve: {
        extensions: ['.js', '.jsx', '.css']
       
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html'
    })
],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js?$/,
                loader: 'babel-loader'
            },
          
                {
                  test: /\.css$/i,
                  use:['style-loader','css-loader']
                },
              
        ]
    },
    
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}