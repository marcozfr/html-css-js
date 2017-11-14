const maxTries = 10;
let randomNumber = getRandom();
let userTries = 0;
let userTriesArray = [];
let message = "";

function validate (userInput) {
   ended = false;
   if(userInput === randomNumber){
     message = "Congrats! You guessed the number : " + userInput;
     ended = true;
   }else{
     if(userInput < randomNumber){
        message = "Number is greater than that."
     }else{
        message = "Number is less than that."
     }
     userTries++;
   }
   userTriesArray.push(userInput);
   console.log('Guess log: '+ userTriesArray);
   console.log(message);
   if(userTries === maxTries){
     console.log('Max tries exceeded. Restarting.')
     ended = true;
   }
   if(ended){
     init();
   }
}

function init(){
  userTriesArray = [];
  userTries = 1;
  randomNumber = getRandom();
}

function getRandom(){
  return Number.parseInt(Math.random()*100);
}
