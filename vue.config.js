const path = require('path');
const resolve = dir => path.join(__dirname, dir)
// const resolve = dir => path.join(__dirname, dir)
// function resolve(dir) {
//     return path.join(__dirname, dir);
// }

module.exports = {
    publicPath: './', // 项目基本url
    lintOnSave: true, // 代码检测开关
    // 这种方法是在每个scss文件头部都引入了xxx.scss文件
    // 是scss-loader在起作用
    css:{
        loaderOptions:{
            scss: {
                // 这里加不加~都可以   ~@/scss/global.scss或者@/scss/global.scss
                prependData: `@import "~@/scss/global.scss";`
            },
        }
    },
    // 全局路径配置
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("assets", resolve("src/assets"))
            .set("components", resolve("src/components"))
            .set("views", resolve("src/views"))
            .set("public", resolve("public"));
        },
}