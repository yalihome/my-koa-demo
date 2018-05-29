var add = require("../add");
var expect = require("chai").expect;
var foo = {bar:"baz"};
var arr = [1,2,3];
var date = new Date();

describe("加法函数的测试",function(){
    if("1加1应该等于2",function(){
        //todo 测试相等与不相等
        expect(add(1,1)).to.be.equal(2);
        expect(4+5).to.be.not.equal(10);
        expect(foo).to.be.deep.equal({bar:"baz"});
        //布尔值为true
        expect("everything").to.be.ok;
        expect(false).to.not.be.ok;
        //typeof
        expect("test").to.be.a("string");
        expect(foo).to.be.an("object");
        expect(date).to.be.an.instanceof(Date);
        //include
        expect(arr).to.include(2);
        expect("foobar").to.contain("foo");
        expect(foo).to.include.keys("bar");
        //empty
        expect([]).to.be.empty;
        expect({}).to.be.empty;
        expect("").to.be.empty;
        //match
        expect("foobar").to.match(/^foo/)

    });
});