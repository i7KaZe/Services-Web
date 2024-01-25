const express = require('express');
const router = express.Router();
const salutations = require('./salutations'); 

// Afficher la liste de toutes les salutations
router.get('/liste', (req, res) => {
    res.json(salutations);
});

// Ajouter une salutation
router.post('/', (req, res) => {
    const { code_langue, langue, message } = req.body;
    if (!code_langue || !langue || !message) {
        return res.status(400).json({
            message: "Erreur, les paramètres code_langue, langue et message sont obligatoires"
        });
    }
    const newSalutation = { code_langue, langue, message };
    salutations.push(newSalutation);
    res.json({
        message: "Salutation ajoutée",
        salutation: newSalutation
    });
});

// Afficher une salutation aléatoire ou basée sur la langue si le paramètre est valide
router.get('/', (req, res) => {
    const { langue } = req.query;
    let filteredSalutations = salutations;
    
    if (langue) {
        filteredSalutations = salutations.filter(s => s.code_langue === langue);
        if (filteredSalutations.length === 0) {
            return res.status(404).json({
                message: `Erreur, le code de langue ${langue} n'existe pas`
            });
        }
    }
      
    const randomIndex = Math.floor(Math.random() * filteredSalutations.length);
    res.json(filteredSalutations[randomIndex]);
});

module.exports = router;
