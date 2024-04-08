// 引入http模块
const http = require('http');

// 创建服务器
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('Hello，我的Web服务器运行起来了!');
});

// 监听端口
const port = 3000;
server.listen(port, '127.0.0.1', () => {
    console.log(`Web服务器运行： http://localhost:${port}/`);
});
