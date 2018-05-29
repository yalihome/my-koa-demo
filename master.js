var childprocess = require('child_process');
var worker = childprocess.fork('./worker.js');
var process = require("process");

console.log('pid in master:', process.pid);

//监听事件
worker.on('message', function(msg) {
    console.log('1:', msg);
})
process.on('message', function(msg) {
    console.log('2:', msg);
})

worker.send('---');

//触发事件 message
process.emit('message', '------');

process.nextTick(function(){
    console.log("延迟执行")
});
console.log("正常执行1");
console.log("正常执行2");
console.log("正常执行3");
console.log("正常执行4");
console.log("正常执行5");