let Koa = require("koa");
let views = require("koa-views");
let render = require("koa-ejs");
let path = require("path");
let app = module.exports = new Koa();

app.use(views(path.join(__dirname,"/views"),{
    extension:"ejs"
}));

render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'template',
    viewExt: 'ejs',
    cache: false,
    debug: true
});

let user = {
    name:{
        first:"tobi",
        last:"Holowaychuk"
    },
    species: "ferret",
    age: 3
};

app.use(async function(ctx){
    await ctx.render("user",{
        user:user
    });
});

if(!module.parent) app.listen(4000);