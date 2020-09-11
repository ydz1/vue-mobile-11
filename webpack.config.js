const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports={
    mode:'development',
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'bundle.js'
    },
    plugins:[
        new VueLoaderPlugin(),
       new htmlWebpackPlugin({
           template:path.join(__dirname,'/src/index.html'),
           filename:'index.html'
       })
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|jpeg|gif|bmp)$/,use:"url-loader?esModule=false&limit=7630&name=[hash:8]-[name].[ext]"},
            {test:/\.(eot|woff|woff2|ttf|svg)$/,use:"url-loader"},
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            {test: /\.vue$/,use:'vue-loader'}
        ]
    },
    resolve:{
        alias:{
            // "vue$":"vue/dist/vue.js"
        }
    }
};