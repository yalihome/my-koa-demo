const Koa = require("koa");
const app = module.exports = new Koa();
app.use(async function pageNotFound(ctx){
    ctx.status = 404;
    console.log(ctx.type);
    switch(ctx.accepts("html","json")){
        case "html":
            ctx.type="html";
            ctx.body="<p>Page Not Found</p>";
            break;
        case "json":
            ctx.body={
                message:"Page No Found"
            };
            break;
        default:
            ctx.type="text";
            ctx.body = "Page Not Found";
    };
});

if(!module.parent){
    app.listen(4000);
}