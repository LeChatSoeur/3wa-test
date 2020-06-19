
const utilisateur = prompt('Saisissez pierre, feuille ou ciseau').toLowerCase();

 
/* let ordinateur = Math.random();

if (ordinateur < (1/3) ) {
    ordinateur = "pierre";
}
else if (ordinateur > (2/3) ) {
    ordinateur = "feuille";
}
else  {
    ordinateur = "ciseau";
} */
 
 
const choixOrdi = ['feuille', 'ciseau', 'pierre'];
const index = Math.floor(Math.random() * 3);
let ordinateur =choixOrdi[index]
console.log(ordinateur);
 
 
 
if (utilisateur === ordinateur) {
    document.write('match nul');
}
 
 
if (utilisateur === 'pierre' && ordinateur === 'ciseau') {
    document.write('Utilisateur gagne'); 
    
}
else if (ordinateur === 'pierre' && utilisateur === 'ciseau') {
    document.write ('ordinateur gagne');
    
}


if (utilisateur === 'feuille' && ordinateur === 'pierre') {
    document.write('Utilisateur gagne');
    
}
else if (ordinateur === 'feuille' && utilisateur === 'pierre') {
    document.write ('ordinateur gagne');
    
}


if (utilisateur === 'ciseau' && ordinateur === 'feuille') {
    document.write('Utilisateur gagne');
    
}
else if (ordinateur === 'ciseau' && utilisateur === 'feuille') {
    document.write ('ordinateur gagne');
    
}


