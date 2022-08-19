const http = require("http");

http
  .createServer((req, res) => {
    res.write("HOLA MUNDO");
    res.end();
  })
  .listen(8080);

console.log("Escuchando en el puerto 8080");
