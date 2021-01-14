// const path = require('path');
// module.exports = {
// 	publicPath:'./',    // 公共路径
// }
module.exports = {
    outputDir: "dist",
    assetsDir: "static",
    // assetsDir: "./",
    publicPath: "./",
    devServer: {
    port: 9000,
    open: true,
    https: false
    }
};
