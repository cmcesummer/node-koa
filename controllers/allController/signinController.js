//登录相关controller
//这里的:name 是自定义的变量
let url_login = async (ctx, next) => {
	ctx.response.body = `<h1>signin</h1>
				        <form action="/signin" method="post">
				            <p>Name: <input name="name" value="sb"></p>
				            <p>Password: <input name="password" type="password"></p>
				            <p><input type="submit" value="Submit"></p>
				        </form>`;
};

let url_signin = async (ctx, next) => {
	console.log(ctx.request.body);
	let name = ctx.request.body.name || '',
		password = ctx.request.body.password || '';
	console.log(`login with userName: ${name} , password: ${password}`);
	if(name == 'sb' && password == '12306') {
		ctx.response.body = `<h1>Welcome, ${name}, haha!</h1>`;
	} else {
		ctx.response.body = `<h1>Login failed!</h1>
        					<p><a href="/login">Try again</a></p>`;
	}
}

module.exports = {
	'GET/login': url_login,
	'POST/signin': url_signin
}

