// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
// ask the userNumber
do {
  var userNumber = parseInt(prompt("Enter one number"));
} while ( isNaN (userNumber));
// print cubes

for (var i = 1; i <= userNumber; i++){
  // cube = i x i x i
  var cube = Math.pow(i, 3);
  console.log( cube )
}
