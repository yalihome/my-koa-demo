const Koa = require("koa");
const app = new Koa();
var events = require("events");
var emitter = new events.EventEmitter();

emitter.addListener("some_event",function(){
    console.log("事件触发，调用此回调函数");
});

emitter.on('some_event', function(arg1, arg2) {
    console.log('listener1', arg1, arg2);
});

app.use(async (ctx,next)=>{
    let start = Date.now();
    await next();
    let ms = Date.now() - start;
    ctx.set("X-Response-Time",`${ms}ms`);
});


app.use(async (ctx,next)=>{
    let start = Date.now();
    await next();
    let ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

app.use(async ctx=>{
    //ctx.body = {"text":"Hello world"};
    ctx.body = null;
    var res = ctx.response;
    emitter.emit("some_event","body","haha");
    //console.log(res.header);
    //console.log(res.status);
    //console.log(res.message);
    console.log("length:"+res.length);
});

app.on("error",err=>{
    console.error("server error:",err);
});
//app.silent = true;
app.listen(4000);
//console.log(app.env);  //development
//console.log(app.proxy);  //false
//console.log(app.subdomainOffset);  //2
console.log(app.keys);  //undefined