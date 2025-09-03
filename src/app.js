let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

window.onload = function() {
  document.querySelector("#heading").innerHTML = 'OMG! you will not believe me but...';
  document.querySelector("#excuse").innerHTML = getRandomWord(who) + ' ' + getRandomWord(action) + ' ' + getRandomWord(what)+ ' '  + getRandomWord(when)
};

function getRandomWord(arrayWords){
  let min = 0;
  let max = arrayWords.length - 1;
  let randomNumber = getRandomNumber(min, max);
  return arrayWords[randomNumber];
}

function getRandomNumber(min,max){
  return Math.floor(Math.random() * (max-min) + min);
}