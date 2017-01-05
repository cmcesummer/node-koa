# node-koa

## es代码转换模块
#####"babel-core": "6.13.2"
#####"babel-polyfill": "6.13.0"
#####"babel-preset-es2015-node6": "0.3.0"
#####"babel-preset-stage-3": "6.5.0"

##koa2
#####"koa": "2.0.0"

##koa2路由
#####"koa-router": "7.0.0"

##koa2解析原始request请求,把解析后的参数，绑定到ctx.request.body中
#####"koa-bodyparser": "3.2.0"

##模板引擎
#####"nunjucks": "2.4.2"

##模块写法
####
### Common.js (sever)
#### module.exports = 'abc'  //content.js
#### var str = require('./content.js')  //index.js
####
### require.js (browser)
#### define('content.js', function(){    //content.js
####   return 'abc';
#### })
####require(['./content.js'], function(str){  //index.js
####    console.log(str);   
####})
####
### es6
#### export default 'abc'  //content.js
#### import str from './content.js'  //index.js
