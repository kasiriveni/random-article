const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'bundle.js'
    },
    module: {
        rules: [
          { test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel-loader" 
        },
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new CopyWebpackPlugin([
            {
              from: './src/index.html',
              to: '',
              toType: 'dir'
            }
        ])

    ],
    devtool: 'inline-source-map'
}