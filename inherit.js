"use strict"
var util = require("util");
var events = require("events");
function Stream(){
    events.EventEmitter.call(this);
}
//原型链的继承
util.inherits(Stream,events.EventEmitter);

var elem = new Stream();

elem.addListener("one_event",function(){
    console.log("事件触发，调用此回调函数");
});

elem.emit("one_event");

class A{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.test=function(){
            console.log(this.x);
        }
    };
    //ES6 如何定义原型方法和属性
    test(){
        console.log(this.y);
    }
    get b(){
        return 5;
    }
    static bar(){
        console.log("static function bar");
    }
}

class B extends A{

}

let a = new A(10,20);
let b = new B();
console.log(b instanceof B);  //true
console.log(b instanceof A);  //true
B.bar();
//console.log(A.prototype.hasOwnProperty("test"));  //true
//console.log(A.prototype.hasOwnProperty("b"));  //true

/*
var x=0;
var obj = {
    set a(val){
        x=1;
    },
    get a(){
        return x;
    }
};

console.log(obj.a);*/
