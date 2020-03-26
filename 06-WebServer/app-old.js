const http = require('http');
http
  .createServer((request, response) => {
    response.writeHead(200, { 'Content-type': 'application/json' });
    let salida = {
      nombre: 'Bryan',
      edad: 32,
      url: request.url
    };
    response.write(JSON.stringify(salida));
    response.end();
  })
  .listen(7070);
console.log('Escuchando el puerto 7070');
