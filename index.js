var http = require('http'); 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var dataAtual = new date();
  var dataFormatada = datatuAltual.toDateString();
  res.end('Maykon Lemes Fernandes!nData atual: ' + dataFormatada);
}).listen(8014);
