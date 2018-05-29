let views = require("koa-views");
let path = require("path");
module.exports = views(path.join(__dirname,"/../views"),{
    map:{
        html:"wsig"
    }
})