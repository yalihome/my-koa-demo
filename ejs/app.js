let Koa = require("koa");
let render = require("koa-ejs");
let path = require("path");

let app = new Koa();
//layout 表示配置入口页面
render(app,{
    root:path.join(__dirname,"view"),
    layout:"template",
    viewExt:"html",
    cache:false,
    debug:false
});

//todo 为什么这里不是 async function
app.use(function(ctx,next){
    ctx.state = ctx.state ||{};
    ctx.state.now = new Date();
    ctx.state.ip = ctx.ip;
    ctx.state.version = "2.0.0";
    return next();  
});

app.use(async function(ctx,next){
    let users = [{ name: 'Dead Horse' }, { name: 'Jack' }, { name: 'Tom' }];
    await ctx.render("content",{
        users
    });
})

if(process.env.NODE_ENV==="test"){
    module.exports = app.callback();
}else{
    app.listen(7001);
    console.log("open http://localhost:7001");
}

app.on("error",function(err){
    console.log(err.stack);
})

