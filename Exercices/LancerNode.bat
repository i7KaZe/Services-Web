@echo off
SET /P PROJECT_NAME=Entrez le nom du projet: 

IF "%PROJECT_NAME%"=="" (
    echo Vous devez fournir un nom pour le projet.
    GOTO End
)

mkdir "%PROJECT_NAME%"
cd "%PROJECT_NAME%"

echo Initialisation de %PROJECT_NAME%...
call npm init -y

echo Installation des modules...
call npm install express morgan dotenv nodemon

echo Creation de index.js...
echo require('dotenv').config(); > temp.txt
echo const express = require('express'); >> temp.txt
echo const app = express(); >> temp.txt
echo const PORT = process.env.PORT ^|^| 3000; >> temp.txt
echo app.listen(PORT, function() { >> temp.txt
echo    console.log('Server is running on port ' + PORT); >> temp.txt
echo }); >> temp.txt
ren temp.txt index.js

echo Creation de .env...
echo PORT=3000 > .env

echo Creation de .gitignore...
echo node_modules/ > .gitignore
echo .env >> .gitignore
echo dist/ >> .gitignore
echo .DS_Store >> .gitignore

echo %PROJECT_NAME% a ete cree avec succes.

:End
pause