const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Créer une instance d'express
const app = express();

// Créer un stream d'écriture (en mode append) pour le fichier de log
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// Configurer Morgan avec le format 'combined' qui est basé sur le format Apache CLF
app.use(morgan('combined', { stream: accessLogStream }));

// Middlewares pour parser le JSON
app.use(express.json());

// Importer les routes 'salutations'
const salutationsRouter = require('./salutationsRouter');

// Utiliser l'objet Router pour regrouper toutes les routes "salutations"
app.use('/api/salutations', salutationsRouter);

// Route de bienvenue
app.get('/api', (req, res) => {
    res.json({ message: "Bienvenue à l'API" });
});

// Écoute sur le port défini dans le fichier .env ou 3000 par défaut
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
