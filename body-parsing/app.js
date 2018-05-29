let Koa = require("koa");
let koaBody = require("koa-body");
let app = module.exports = new Koa();

//todo koa-body 居然还有长度限制吗？
app.use(koaBody({
    jsonLimit:"1kb"
}));

app.use(async function(ctx){
    let body = ctx.request.body;
    if(!body.name) ctx.throw(400,"name required");
    ctx.body = {name:body.name.toUpperCase()};
});

if(!module.parent) app.listen(4000);