const Koa = require('koa');

const router = require('koa-router')();

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

//这里的:name 是自定义的变量
router.get('/:name', async (ctx, next) => {
	const name = ctx.params.name;
	if(name == 'login') {
		ctx.response.body = `<h1>${name}</h1>
					        <form action="/signin" method="post">
					            <p>Name: <input name="name" value="koa"></p>
					            <p>Password: <input name="password" type="password"></p>
					            <p><input type="submit" value="Submit"></p>
					        </form>`;
	} else {
		ctx.response.body = `h ${name}a`;	
	}
})

//router处理post
router.post('/signin', async (ctx, next) => {
	console.log(ctx.request);
})

router.get('/:one/:name', async (ctx, next) => {
	const name = ctx.params.name;
	const one = ctx.params.one;
	ctx.response.body = `h ${name}a$ ${one}`;
})

router.get('/', async (ctx, next) => {
	ctx.response.body = '<h1>index</h1>'
})

app.use(router.routes());

app.listen(3000);
console.log('start listened at port 3000');