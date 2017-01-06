
//
//koa并没有在ctx对象上提供render方法，
//这里我们假设应该这么使用，
//我们在编写Controller的时候，最后一步调用ctx.render(view, model)就完成了页面输出
const url_index = async (ctx, next) => {
	ctx.render('index.html',{
		title:'hehe'
	})
}

module.exports = {
	'GET/': url_index
}

