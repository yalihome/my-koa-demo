console.log('pid in worker:', process.pid);

process.on('message', function(msg) {
    console.log('3:', msg);
});

//发消息给父进程
process.send('===');
process.emit('message', '======');