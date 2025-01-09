/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).*/


/*range di età:
-minorenni --> sconto 20%
-maggiorenni da 18 a 65
-senior da 65 anni in poi --> sconto 40% 

Prezzo del bigietto:
-0.21€/km

Output:
-massimo due decimali*/


//Fase di elaborazione

let scontoPercentuale= 20/100;
let scontoPercentuale2= 40/100;
let chilometriPrezzo= 0.21;
const priceChilometri= 0.21*chilometri;


let chilometri= parseInt (prompt ("scrivimi i numeri di chilometri che vuoi percorrere"))
let età= parseInt (prompt ("scrivimi la tua età"))


if(età<18){
    console.log(priceChilometri*scontoPercentuale)
} else if (età>=65){
    console.log(priceChilometri*scontoPercentuale2)
} else{
    console.log(priceChilometri)
}