let nome = prompt("Inserisci il tuo nome:"); // string | null 
let cognome = prompt("inserisci il tuo cognome:"); // string | null
let colorePreferito = prompt("Inserisci il tuo colore preferito:"); // string | null
const numeroCasuale = Math.round(Math.random() * 99); //number
const password = nome + cognome + colorePreferito + numeroCasuale; //string | null
console.log("la tua password generata è:", password); 

