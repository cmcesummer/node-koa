const Koa = require('koa');

const app = new Koa();

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

app.use(async (ctx, next) => {
	await next();
	ctx.response.type = 'text/html';
	ctx.response.body = 'dsa';
})

app.listen(3000);
console.log('start listened at port 3000');