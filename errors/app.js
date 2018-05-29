const Koa = require("koa");
const app = module.exports = new Koa();
let process = require("process");
let type = '';
app.use(async function(ctx,next){
    try{
        await next();
    }catch(err){
        type = "catch";
        ctx.status = err.status||500;
        ctx.type = "html";
        ctx.body = "<p>Something <em>exploded</em>,please contact Maru.</p>";
        ctx.app.emit("error",err,ctx);
    }
});


app.use(async function(){
    type = "throw";
    throw new Error("boom boom");
});

app.on("error",function(err){
    //console.log(process.env);
    console.log(type);
    if(process.env.NODE_ENV!="test"){
        console.log("sent error %s to the cloud",err.message);
        console.log(err);
    }
})

if(!module.parent){
    app.listen(4000);
}