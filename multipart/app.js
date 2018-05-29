let Koa = require("koa");
let os = require("os");
let path = require("path");
let fs = require("fs-promise");
let koaBody = require("koa-body");
let app = module.exports = new Koa();

app.use(koaBody({multipart:true}));

app.use(async function(ctx){
    //返回操作系统的默认临时文件夹，创建一个临时文件夹用于存储文件
    let tmpdir = path.join(os.tmpdir(),uid());
    await fs.mkdir(tmpdir);
    let filePaths = [];
    let files = ctx.request.body.files||{};
    for(let key in files){
        let file =files[key];
        let filePath = path.join(tmpdir,file.name);
        let reader = fs.createReadStream(file.path);
        let writer = fs.createWriteStream(file.path);
        reader.pipe(writer);
        filePaths.push(filePath);
    }
    ctx.body = filePaths;
});
if(!module.parent){
    app.listen(4000);
}

function uid(){
    return Math.random().toString().slice(2);
}
