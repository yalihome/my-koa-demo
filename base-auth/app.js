let Koa= require("koa");
let auth = require("koa-basic-auth");

//todo 具体的应用场景是什么样的？
let app = module.exports = new Koa();
app.use(async function(ctx,next){
    try{
        await next();
    }catch(err){
        if(err.status===401){
            ctx.status = 401;
            ctx.set("WWW-Authenticate","Basic");
            ctx.body = "cant haz that";
        }else{
            throw err;
        }
    }
});

app.use(auth({name:"tj",pass:"tobi"}));

app.use(async function(ctx){
    ctx.body = "secret";
});

if(!module.parent){
    app.listen(4000);
}