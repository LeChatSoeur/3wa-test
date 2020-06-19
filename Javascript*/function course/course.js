let listeDeCourses = ['sopalin', 'oranges', 'citrons', 'savon', 'eau de javel', 'du virus en promo'];


function ajouterUnProduitALaListe(produit) {
    listeDeCourses.push(produit);
}

ajouterUnProduitALaListe('banane');

//console.log(listeDeCourses);

function supprimerTousLesProduitsDeLaListe() {
    listeDeCourses.length = 0;
}

// supprimerTousLesProduitsDeLaListe();

//console.log(listeDeCourses);


// function tailleEtListeDuContenu() {
//     for (let i = 0; i <= listeDeCourses.length; i++) {
//         //
//     }
 
// }

function tailleEtListeDuContenu() {
document.write('<ul>');
for(let i = 0; i < listeDeCourses.length; i++) {
    // Creer les <li>
    document.write('<li>');

        listeDeCourses[i];
    document.write('</li>');

//console.log(listeDeCourses[i])

}
document.write('</ul>');
}
tailleEtListeDuContenu(listeDeCourses);