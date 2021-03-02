// Crea un array vuoto.
var oddNumbers = [];
// Chiedi per 6 volte all’utente di inserire un numero
for (var i = 1; i <= 6; i++){
  var number = parseInt(prompt("Please anter a number"));
  // se è dispari inseriscilo nell’array.
  if ( number % 2 == 1 ){
    oddNumbers +=  number;
  }
}
console.log(oddNumbers)
