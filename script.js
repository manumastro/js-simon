/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

let randomNumbers = document.getElementById('random-numbers');
let outputResult = document.getElementById('output');
const buttonWrapper = document.querySelector('.button-wrapper');
document.querySelector('button').addEventListener('click', play);

let random = [];


function play(){
  reset();
  generateRandomNum();
  showNumbers();
  timer();
  checkNumbers();
}

function generateRandomNum(){
  while(random.length < 5){
    let randomNum = randomFunction(1, 100);
    if(!random.includes(randomNum)){
      random.push(randomNum);
    }
  }
  return random;
}
function randomFunction(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function showNumbers(){
  console.log(random);
  let i = 0;
  randomNumbers.innerHTML = random[i];
  i++;
  const flag = setInterval(function(){
    randomNumbers.innerHTML = random[i];
    console.log(random[i]);
    i++;
    if(i > 4){
      clearInterval(flag);
    }
  },2000)
}

function timer(){
  setTimeout(function (){
    let n = 5;
    const flag = setInterval(function(){
    randomNumbers.style.color = 'black';
    randomNumbers.innerHTML = n;
    n--;
    if(n < 1){
      clearInterval(flag);
    }
  },1000)
  },10000)
}

function checkNumbers(){
  let inputN = [];
  let i = 1;
  setTimeout(function (){
    while(i < 6){
      num = parseInt(prompt('Inserire il numero'));
      if(!isNaN(num)){
        for(let i = 0; i < random.length; i++){
          if(num === random[i]){
            inputN.push(num);
          }
        }
      }else{
        alert('Il valore inserito non è un numero');
        i--;
      }
      i++;
    }
    console.log(inputN);
    randomNumbers.innerHTML = '';
    outputResult.innerHTML = 
      `I numeri indovinati sono ${inputN.length} <br>
       e sono ${inputN}`;
  }, 17000)
}

function reset(){
  buttonWrapper.innerHTML = '';
}



