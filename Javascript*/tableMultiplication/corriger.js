



// Generer une table de multiplication dont la taille est determinee par un utilisateur
let number = '';

do {
    number = parseFloat(prompt('number'));
} while (isNaN(number));


// cree un tableau
// Generer une table de multiplication
// Creer une table 
document.write('<table>');

for(let i = 1; i <= number; i++) {
    
    document.write('<tr>');
    
    for(let j = 1; j <= number; j++) {
        
        // on verifie si i === j
        if(i === j) {
            document.write('<td class="same-number">');
        } else {
            document.write('<td>');
        }
        
        document.write(i * j);
        document.write('</td>');
        
    }
    
    document.write('</tr>');
    
}

document.write('</table>');

