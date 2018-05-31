let Koa = require("koa");
let render = require("./lib/render");
let logger = require("koa-logger");
let router = require("koa-router")();
let koaBody = require("koa-body");
// let ejs = require("koa-ejs");
let path = require("path");

let app = module.exports = new Koa();

let posts = [];
app.use(logger());
app.use(render);
app.use(koaBody());

router.get("/",list)
.get("/post/new",add)
.get("/post/:id",show)
.post("/post",create);

app.use(router.routes());

async function list(ctx){
    await ctx.render("list",{"posts":posts});
}

async function add(ctx){
    await ctx.render("new");
}

async function show(ctx){
    let id = ctx.params.id;
    let post = posts[id];
    if(!post){
        ctx.throw(404,"invalid post id");
    }
    await ctx.render("show",{"post":post});
}

async function create(ctx){
    let post = ctx.request.body;
    let id = posts.push(post)-1;
    post.created_at = new Date();
    ctx.redirect("/");
}

if(!module.parent) app.listen(4000);