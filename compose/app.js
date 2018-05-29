let Koa = require("koa");
//koa-compose 组合 middleware
let compose = require("koa-compose");
let app = module.exports = new Koa();
let process = require("process");

async function responseTime(ctx,next){
    let start = new Date();
    await next();
    let ms = new Date() - start;
    //设置 response header
    ctx.set("X-Response-Time",ms+"ms");
}

async function logger(ctx,next){
    let start = new Date();
    await next();
    let ms = new Date() - start;
    if('test'!=process.env.NODE_ENV){
        console.log("%s %s - %s",ctx.method,ctx.url,ms);
    }
}

async function respond(ctx,next){
    await next();
    if(ctx.url!="/") return;
    ctx.body = "Hello World";
}

let all = compose([
    responseTime,
    logger,
    respond
]);

app.use(all);

if(!module.parent) app.listen(4000);