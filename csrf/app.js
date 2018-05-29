let Koa = require("koa");
let koaBody = require("koa-body");
let session = require("koa-session");
let CSRF = require("koa-csrf");
let router = require("koa-router")();

let app = module.exports = new Koa();

app.keys = ["session key","csrf example"];
app.use(session(app));
app.use(koaBody());

app.use(new CSRF());

router.get("/token",token).post("/post",post);

app.use(router.routes());

async function token(ctx){
    ctx.body = ctx.csrf;
}

async function post(ctx){
    ctx.body = {ok:true};
}

if(!module.parent){
    app.listen(4000);
}