let number = '';

do {
    number = parseFloat(prompt('entrez un nombre'));
} while (isNaN(number));


document.write('<table>');

    document.write('<tr>');
        for(let i = 1; i <= number; i++) {
            if ( number * i)
     
        document.write('<td>');
        for(let j = 1; j <= number[i] ; j++ ) {
        
        document.write('</td>');
        document.write('</tr>');
        }
        }
        
document.write('</table>');

    
    
        
            

        
    

        
    
    



/*


if ( gnagna) {} else {}   : si la condition gnagna est remplie, 
alors premières accolades, sinon, les deuxièmes.
do {} while (gnagna) : fait le code entre accolades, 
et recommence, tant que la condition gnagna n’est pas remplie.
while (gnagna){} : tant que la condition gnagna n’est pas remplie, tu fais le code entre accolades.

for (truc; trucgnagna; truc ++) {} : pour un “truc” donné, 
ET tant que truc rempli la condition gnagna : on incrémente 
(ça marche aussi avec d’autres calculs) truc de 1 en 1, 
en éxécutant à chaque fois le code entre accolades
*/


