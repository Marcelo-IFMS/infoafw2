var http = require('http');
var server = http.createServer(function (req, res) {
    var url = req.url;
    console.log(req.method)
    if (url == '/') {
        res.end(`Pagina Inicial ${url}`);
    }else if (url == '/cursos') {
        res.end(`Bem vindo a pagina de ${url}`);
    }else if (url == '/pesquisa') {
        res.end(`Bem vindo a pagina de ${url}`);
    }else if (url == '/ensino') {
        res.end(`Bem vindo a pagina de ${url}`);
    }else if (url == '/extensao') {
        res.end(`Bem vindo a pagina de ${url}`);
    }else if (url == '/esportes') {
        res.end(`Bem vindo a pagina de ${url}`);
    }else {
        res.end(`Pagina Inexistente 404 ${url}`);
    }
}).listen(3000);
console.log('Servidor rodando na porta 3000');