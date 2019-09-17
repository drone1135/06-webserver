const http = require('http');

http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'dario',
        edad: 36,
        url: req.url
    }
    resp.write(JSON.stringify(salida));
    resp.end();
}).listen(8080);

console.log('escuchando el puerto 8080');