/*
let heightFromGround= 20 ;
let playerTouchGround= heightFromGround == 0;


let playerHasJetpack= true;

if(playerTouchGround) {
  console.log("Player is on the ground.");
  console.log("Player can jump.");
}
else if (playerHasJetpack) {
  console.log("Player Jets Away!")
}
else {
  console.log("Player is not touching the ground.");
  console.log("Player has no jetpack.")
  console.log("You cannot jump right now.");
}
*/


//Vad det gör: Detta kräver inbyggda readline-modulen i Node.js.
// readline-modulen används för att läsa in data från standardinput, som till exempel från en terminal eller kommandorad.
  const readline = require('readline');
  //Vad det gör: Skapar ett gränssnitt (r1) för att läsa och skriva till kommandoraden.
// input: process.stdin gör att vi kan ta emot användarens inmatning, och
// output: process.stdout gör att vi kan skriva ut saker till terminalen.
  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let currentYear = 2024;
  //Vad det gör: Frågar användaren "what year are you born?" och väntar på inmatning.
// När användaren skriver ett år och trycker på enter, körs den tillhörande
// callback-funktionen med argumentet birthYear, som är användarens inmatning.
  r1.question('what year are you born?', (birthYear) => {


    birthYear = parseInt(birthYear); //konverterar inmatade värdet till heltal från string

    let ageOfPerson = currentYear - birthYear;
    let isChild = ageOfPerson <= 10 && ageOfPerson >= 0;

    let isTeen = ageOfPerson >= 11 && ageOfPerson <= 17;

    let isAdult = ageOfPerson >= 18;


    if (isChild) {

      console.log("hello child ")
      console.log("you are" + ageOfPerson + " years old");
      if (ageOfPerson %2===0 ) {
        console.log("that is an even number");
      }
      else{
        console.log("that is an odd number");
      }
    }
    else if (isTeen) {

      console.log("Hello Teen");
      console.log("you are" + ageOfPerson + " years old");
      if (ageOfPerson %2===0 ) {
        console.log("that is an even number");
      }
      else{
        console.log("that is an odd number");
      }
    }

    else if (isAdult) {
      console.log("Hello Adult")
      console.log("you are " + ageOfPerson + " years old");
      if (ageOfPerson %2===0 ) {
        console.log("that is an even number");
      }
      else{
        console.log("that is an odd number");
      }


    }
    else {
      console.log("You can not be" + ageOfPerson + " years old");
    }
    r1.close();
  })
