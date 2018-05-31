// process.on("exit", function () {
//     console.log("This will run");
//     setTimeout(function () {
//         console.log("This will not run");
//     }, 100);
//     console.log("Bye.");
// }, 100);

// process.on('uncaughtException', function (err) {
//     console.log('Caught exception: ' + err);
// });
// setTimeout(function () {
//     console.log('This will still run.');
// }, 500);
// // Intentionally cause an exception, but don't catch it.
// nonexistentFunc();
// console.log('This will not run.');

// var http = require('http');
// var server = http.createServer(function(req,res) {
// 　　res.writeHead(200, {});
// 　　res.end('response');
// 　　badLoggingCall('sent response');
// 　　console.log('sent response');
// });
// process.on('uncaughtException', function(e) {
// 　　console.log(e);
// });
// server.listen(8080);
// console.log("version:");
// console.log(process.version);
// console.log("pid:");
// console.log(process.pid);
// console.log("title:");
// console.log(process.title);
// console.log("platform:");
// console.log(process.platform);
// console.log("installPrefix:");
// console.log(process.installPrefix);
// console.log("cwd:");
// console.log(process.cwd());
// console.log("execPath:");
// console.log(process.execPath);
// console.log("uptime:");
// console.log(process.uptime());

// let http = require("http");
// var s = http.createServer(function(req,res){
//     res.writeHead(200,{});
//     res.end("foo");
//     console.log("http response");
//     process.nextTick(function(){
//         console.log("tick");
//     });
// });
// s.listen(8000);

// process.on('uncaughtException', function (e) {
//     console.log(e);
// });
// process.nextTick(function () {
//     console.log('tick');
// });
// process.nextTick(function () {
//     iAmAMistake();
//     console.log('tock');
// });
// process.nextTick(function () {
//     console.log('tick tock');
// });
// console.log('End of 1st loop');

var cp = require('child_process');
cp.exec('ls -l', function(e, stdout, stderr) {
　　if(!e) {
　　　　console.log(stdout);
　　　　console.log(stderr);
　　}
});