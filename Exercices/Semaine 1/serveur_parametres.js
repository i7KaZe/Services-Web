const http = require('node:http');
const url = require('url');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    // Récupération des paramètres
    const params = url.parse(req.url, true).query;
    const route = url.parse(req.url).pathname;

    // Affichage des valeurs de la requête
    console.log('Route : ' + route);
    console.log('Paramètres : ' + JSON.stringify(params));

    // Retourne les paramètres en JSON dans la réponse
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(params));

    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
