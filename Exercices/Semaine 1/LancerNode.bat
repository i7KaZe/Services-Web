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
call npm install express morgan dotenv

echo Creation de index.js...
(echo const express = require('express'); 
 echo const app = express(); 
 echo app.listen(process.env.PORT || 3000, () => console.log('Server is running on port ' + (process.env.PORT || 3000)));) > index.js

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
