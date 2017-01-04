//路由中间件

const fs = require('fs');

//endWith 实现 返回 true/false  filter 过滤出的就是fliter函数return true的内容
String.prototype.endWith = function(str) {
  var reg = new RegExp(str + '$');     
  return reg.test(this);        
}
String.prototype.startWith = function(str) { 
  var reg = new RegExp('^' + str);     
  return reg.test(this);        
}

//处理 url router
function addRequestModule(router, requestModule) {

	for(let key in requestModule) {

		if(key.startWith('GET')) {

			let path = key.substring(3);
			router.get(path, requestModule[key]);
			console.log(`register URL mapping: GET ${path}`);

		} else if(key.startWith('POST')) {

			let path = key.substring(4);
			router.post(path, requestModule[key]);
			console.log(`register URL mapping: GET ${path}`);

		} else {

			console.log(`invalid URL: ${url}`);

		}
	}
}

//遍历controller文件
function addController(router) {

	var files = fs.readdirSync(__dirname + '/allController');

	let controllerJs = files.filter(item => {
		return item.endWith('Controller.js')
	})

	for(let item of controllerJs) {
		console.log(`controller:${item}`);
		let requestModule = require(__dirname + '/allController/' + item);
		addRequestModule(router, requestModule);
	}
}

function controller() {
	const router = require('koa-router')();
	addController(router);
	return router.routes();
}

module.exports = controller;