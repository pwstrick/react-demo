var path = require('path'),
    webpack = require('webpack');
module.exports = {
    //宏定义
    macro: {
        '__VERSION': Date.now().toString(16)
    },
    //CSS相关设置
    css: {
        rem: 75 //rem计算基值
    },
    //server相关设置
    server: {
        release: './dist/'+path.basename(__dirname)+'/', //发布目录
        port: 8000 //端口
    },
    //HTML相关
    html: {
        collapseWhitespace: true
    },
    //webpack打包
    webpack: {
        entry: {
            index : './babel/index.js'
        },
        output: {
            filename: '[name].bundle.js'
        },
        plugins: [
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify("production")
                }
            })
        ]

}
    //vue: {
    //    html: {
    //        root: path.resolve(__dirname)
    //    }
    //}
};