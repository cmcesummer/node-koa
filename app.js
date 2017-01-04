const Koa = require('koa');

const app = new Koa();

//解析原始request请求，然后，把解析后的参数，绑定到ctx.request.body中
const bodyParser = require('koa-bodyparser'); 

const controller = require('./controllers/controller.js');

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

//把bodyParser注册到app上 
app.use(bodyParser());
//路由
app.use(controller());

app.listen(3000);
console.log('start listened at port 3000');

