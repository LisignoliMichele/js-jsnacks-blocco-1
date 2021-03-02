// In un array sono contenuti i nomi degli invitati alla festa del grande Inzaghi,
var invitedList = ["Marco", "Alex", "Gianluca", "Paola", "Arianna", "Giovanni", "Samuele" ]
// chiedi all’utente il suo nome
var userName = prompt("What's your name?")
var invited = false;
// comunica all'utente se può partecipare o no alla festa.
for (var i = 0; i < invitedList.length; i++){
  if (invitedList[i].toLowerCase() == userName.toLowerCase()) {
    invited = true;
  }
}
if (invited ){
  alert("You are in, let's party")
} else {
  alert("Sorry, your name it's not in the list, bye bye")
}
