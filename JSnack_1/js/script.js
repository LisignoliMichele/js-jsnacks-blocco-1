// L’utente inserisce due numeri in successione, con due prompt.
var numberOne = parseInt(prompt("enter a number"));
var numberTwo = parseInt(prompt("enter another number"));
// Il software stampa il maggiore.
if (numberOne > numberTwo) {
  alert(numberOne +' the first number it\'s the bigger one' );
} else if (numberTwo > numberOne) {
  alert(numberTwo + ' the second number it\'s the bigger one' );
}else {
  alert(numberOne + " " + numberTwo + " The numbers are the same" );
}
