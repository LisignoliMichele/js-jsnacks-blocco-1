// Il software deve chiedere per 10 volte all’utente di inserire un numero.
var sum = 0;
// Il programma stampa la somma di tutti i numeri inseriti.

for (var i = 1; i <= 10; i++){
  var number = parseInt(prompt("Please anter a number"));
  if ( !isNaN(number) ){
    sum = sum + number;
  }
}

alert("the ammount of all your numbers is: " + sum)
