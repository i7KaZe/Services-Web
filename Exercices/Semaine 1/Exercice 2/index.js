require('dotenv').config();
const http = require('http');
const url = require('url');

const professeurs = {
    1: { nom: "Fréchette", prenom: "Mathieu"},
    2: { nom: "Lagacé", prenom: "Christiane" },
    3: { nom: "Trottier", prenom: "Sébastien" },
    4: { nom: "Tousignant", prenom: "Simon" },
    5: { nom: "Mercier", prenom: "François" },
    6: { nom: "Croteau", prenom: "Carine" },
    7: { nom: "Taleb", prenom: "Frédérik" },
    8: { nom: "Ouellet", prenom: "Alexandre" },
}

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url,true).query;
    if (queryObject.code && professeurs[queryObject.code]) {
        const prof = professeurs[queryObject.code];
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`<h1>${prof.prenom} ${prof.nom}</h1>`);
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>Professeur non trouvé</h1>');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
