// const path = require('path');
// module.exports = {
// 	publicPath:'./',    // 公共路径
// }
module.exports = {
	outputDir: 'dist',
	publicPath: process.env.NODE_ENV === 'production'
	  ? '/hannstar-smartmanufacture-view/'
	  : '/'
  }
