const Koa = require('koa');
const app = new Koa();

// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
await next();
const ms = Date.now() - start;
ctx.set('X-Response-Time', `${ms}ms`);
console.log("X-Response-Time");
});

// logger

app.use(async (ctx, next) => {
    const start = Date.now();
await next();
const ms = Date.now() - start;
console.log(`${ctx.method} ${ctx.url} - ${ms}`);
console.log("node_env:"+app.env);
});

// response

app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(3000);