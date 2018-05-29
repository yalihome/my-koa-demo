let app = require("./app");
let server = app.listen();
let request = require("supertest").agent(server);

describe("404",function(){
    //todo after 是属于mocha的api吗？这里不需要 require mocha 模块吗？
    after(function(){
        server.close();
    });

    describe("when GET /",function(){
        it("should return the 404 page",function(done){
            request.get("/").expect("/").expect(/Page Not Found/, done)
        })
    })
})