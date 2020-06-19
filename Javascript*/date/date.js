const aujourdhui = new Date();
const day = aujourdhui.getDay();
const jour = aujourdhui.getDate();
const month = aujourdhui.getMonth();
const year = aujourdhui.getFullYear()


console.log(day);
const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

const months = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'];

console.log(months[month], days[day], jour, year);
