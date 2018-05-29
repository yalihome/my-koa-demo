let Koa = require("koa");
let rawBody = require("raw-body");
let session = require("kao-session");

let app = module.exports = new Koa();
app.keys = ["key1","key2"];
app.use(session(app));

app.use(async function(ctx,next){
    if(ctx.method!=="GET"||ctx.path!=="/message"){
        return await next();
    }
    let messages = ctx.session.message||[];
    ctx.body = messages;
    delete ctx.session.message;
});

app.use(async function(ctx,next){
    if(ctx.method!=="POST" || ctx.path!=="/message"){
        return await next();
    }
    let message = await rawBody(ctx.req,{
        encoding:"utf8"
    });

    ctx.session.message = ctx.session.message ||[];
    ctx.session.message.push(message);
    ctx.status = 204;
});