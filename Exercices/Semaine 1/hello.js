console.log(
    'J’écris directement dans la console! Je peux faire du code qui ne s’exécute que sur le serveur'
);

var fruits = ['pomme', 'orange', 'banane'];

fruits.forEach(afficherElementTableau);

/*
* Affiche à la console un élément du tableau
*
* @param item - L'item à afficher
* @param index - La position de l'item dans le tableau
*/
function afficherElementTableau(item, index) {
    console.log(index + ':' + item);
}
