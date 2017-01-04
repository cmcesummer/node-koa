
const url_index = async (ctx, next) => {
	ctx.response.body = `<h1>index</h1>
		<p><a href="/login">please signin</a></p>`
}

module.exports = {
	'GET/': url_index
}

