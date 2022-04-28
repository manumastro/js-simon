let secondsToWait = 5;
const totalNumbers = 5;
const randomNumbers = [];


/**************************FUNCTIONS***************************/
const getRandomNumbers = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const printMessages = (message, numbers) =>{
  document.getElementById('message').innerHTML = message;
  document.getElementById('numbers').innerHTML = numbers;
}

const getUserNumbers = () => {
  const numbers = [];
  while(numbers.length < totalNumbers){
    const newNumber = parseInt(prompt('Inserirsci un numero'));
    if(!numbers.includes(newNumber)){
      numbers.push(newNumber)
    }else{
      alert('Numero già inserito!');
    }
  }
  return numbers;
}

const getGuessedNumbers = (numbersToCheck) =>{
  const guessedNumbers = [];

  for(let i = 0; i < randomNumbers.length; i++){
    if(numbersToCheck.includes(randomNumbers[i])){
      guessedNumbers.push(randomNumbers[i]);
    }
  }

  return guessedNumbers;
}


/***************************TIMING FUNCTION*********************************/
const countDown = setInterval(function(){
  printMessages(`Hai ${--secondsToWait} secondi per indovinare i seguenti numeri`, randomNumbers);
},1000)

setTimeout(function(){
  clearInterval(countDown);
  printMessages('Te li ricordi tutti?', '');
}, secondsToWait * 1000)

setTimeout(function(){
  printMessages("Scrivi tutti i numeri", '');

  const userNumbers = getUserNumbers();

  const guessedNumbers = getGuessedNumbers(userNumbers);

  if(!guessedNumbers.length === 0){
    printMessages('Non hai indovinato nulla!!', '');
  }else{
    printMessages(`Hai indovinato ${guessedNumbers.length} numeri su ${totalNumbers}`, guessedNumbers)
  }

}, (secondsToWait + 1) * 1000)


//**************************START************************//
while(randomNumbers.length < totalNumbers){
  const newRandomNumber = getRandomNumbers(1, 100);
  if(!randomNumbers.includes(randomNumbers)){
    randomNumbers.push(newRandomNumber);
  }
}
console.log(randomNumbers);

printMessages(`Hai ${secondsToWait} secondi per indovinare i seguenti numeri`, randomNumbers);