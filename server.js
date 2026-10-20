const http = require('node:http');

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  if (new URL(req.url, 'http://localhost').pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('welcome to node server V2 Homepage');
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
