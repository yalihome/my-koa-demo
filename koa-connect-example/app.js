let koa = require("koa");
let c2k = require("koa-connect");

function connectMiddleware(req,res,next){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("From the Connect middleware");
    next();
}

function koaMiddlware(ctx,next){
    next().then(()=>{

    }).catch(()=>{

    })
}

async function koaMiddleWare(ctx,next){
    try{
        await next();
    }catch(e){

    }
}

let app = new koa();
app.use(koaMiddlware);
app.use(c2k(connectMiddleware));
app.use((ctx,next)=>{
    //todo 为什么会输出2次
    console.log("It will continue on to here");
});
app.listen(4000);