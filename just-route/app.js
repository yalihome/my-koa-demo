let Koa = require("koa");
let route = require("koa-router")();
let app = new Koa();
var views = require("koa-views");

//todo 这句话的作用是什么？为什么会404？
//views(root,opts) 
//extension 表示视图默认的后缀，默认的后缀是什么？
//map 属性用于映射文件扩展名到模板引擎
app.use(views(__dirname+"/views",{
    map:{
        html:"ejs"
    }
}));

let about = async ctx=>{
    await ctx.render("about");
}

//在此基础上加上 koa-views
let main = async ctx=>{
    await ctx.render("index");
}
route.get("/",main).get("/about",about)

app.use(route.routes());

app.listen(4000);