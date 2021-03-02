// L’utente inserisce due parole in successione, con due
// prompt.
var firstWord = prompt("Enter a word");
var secondWord = prompt("Enter another word");
// Il software stampa prima la parola più corta, poi la parola più lunga

if (firstWord.length > secondWord.length) {
  alert(' The first word " ' + firstWord + '" it\'s the longer one and the second one "' + secondWord + '" its the shorter' );
} else if (firstWord.length < secondWord.length) {
  alert(' The second word " ' + secondWord + '" it\'s the longer one and the first one "' + firstWord + '" its the shorter' );
}else {
  alert(secondWord + " " + firstWord + " The words are long same" );
}
