const Koa = require('koa');

const app = new Koa();

const fs = require('fs');

//解析原始request请求，然后，把解析后的参数，绑定到ctx.request.body中
const bodyParser = require('koa-bodyparser'); 

const controller = require('./controllers/controller.js');

let staticFiles = require('./staticFiles.js');

//中间件的顺序很重要
app.use(async (ctx, next) => {
	console.log(`method: ${ctx.request.method}; url: ${ctx.request.url}`);
	await next();
})

app.use(async (ctx, next) => {
	const start = new Date().getTime();
	await next();
	const useTime = new Date().getTime() - start;
	console.log(`useTime: ${useTime} ms`);
})

app.use(staticFiles('/static/', __dirname + '/static'));

//把bodyParser注册到app上 
app.use(bodyParser());
//路由
app.use(controller());

app.listen(3000);
console.log('start listened at port 3000');

