let Koa = require("koa");
let app = module.exports = new Koa();
app.use(async function(ctx){
    //~~ 为转换为数字类型的意思
    let n = ~~ctx.cookies.get("view")+1;
    ctx.cookies.set("view",n);
    ctx.body = n + "views";
});

if(!module.parent){
    app.listen(4000);
}