



let utilisateur = parseFloat(prompt('Saisissez un nombre :'));



           

if (isNaN(utilisateur) == false) {
    alert('Merci.');
    
} else parseFloat(prompt('Vous avez obligation de saisir un nombre :'));
    

 
//corriger prof

// tant qu'on a pas un nombre on continue a demander a l'utilisateur.

let number = '';



do {
    number = parseFloat(prompt('entrez un nombre'));
} while (isNaN(number));

console.log(number);

// isNaN() is Not a Number