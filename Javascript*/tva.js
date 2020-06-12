const taux_de_TVA = 20.0;

let HT = '';

do {
  HT = parseFloat( prompt('Veuillez saisir un montant HT:') );
} while (isNaN(HT));
 
console.log(HT);
 
const reduction = prompt('Avez vous un code de reduction:').toLocaleLowerCase();
if (reduction === "oui" || reduction === "yes") {
  
  let remise = '';
  do {
   remise = parseFloat( prompt('Entrer le % de remise') );
 } while (isNaN(remise));    
    
    
    const montantRemise = (HT * remise) / 100;
    const remiseHT = HT - montantRemise ;
    const TVA = (remiseHT * taux_de_TVA) / 100;
    const TCC = remiseHT + TVA;  
    document.write(TCC);
}  
  else document.write("Aucune remise n\'a été appliquée");




    //console.log(remise);
//const TVA = (HT * taux_de_TVA) / 100;
//const TCC = remiseHT + TVA;

  //  document.write(TCC);
