// var counter = 60
//function countdown(){
//  counter--;
//  if(counter === 0) {
//    clearInterval(strtcd);
//  };
//  return counter
//};

//var strtcd = setInterval(countdown, 1000);

//document.querySelector('#start').addEventListener('click', countdown)

//function strttimer() {
//  var strt1 = countdown();
//  document.querySelector('#timeleft').value = strt1;
//}

//var generateBtn = document.querySelector('#generate');

//function generatePassword(event) {
//  var counter = 60
//  counter--;
//  if(counter === 0) {
//    console.log("blastoff");
//    clearInterval(start);
//  }
//};

//var start = setInterval(generatePassword, 1000)

//function writePassword() {
//  var password = generatePassword();
//  document.querySelector('#password').value = password;
//}

// Add event listener to generate button
//generateBtn.addEventListener('click', writePassword);

var timerA = document.querySelector('#timer');

var startQuiz = document.querySelector('#start');

var hide = document.querySelector('#hide');

var hide2 = document.querySelector('#hide2');

var counter = 61;

startQuiz.addEventListener('click', setCounterText);
startQuiz.addEventListener('click', addQ1)

timerA.innerHTML = "60";

function setCounterText() { 
  console.log(counter);
  counter--;
  timerA.innerHTML = counter;
  if(counter === 60){
    countdown = setInterval(setCounterText, 1000);
  } else if(counter <= -1){
      timerA.innerHTML = "0"
    }
  };


  var a1q1 = document.querySelector('#q1a1')
  a1q1.style.display = "none"

  function addQ1() {
    startQuiz.style.display = 'none';
    hide.style.display = 'none';
    hide2.style.display = 'none';
    var q1add = document.querySelector('#q1');
    var q1 = document.createElement("p");
    q1.textContent = "Commonly used datatypes do NOT include:";
    q1add.appendChild(q1);
    var q1a1 = document.querySelector('#q1a1');
    var q1ans1 = document.createElement("div");
    q1ans1.textContent = "1. strings";
    q1a1.appendChild(q1ans1);
    q1a1.style.display = 'inline';
    a1q1.addEventListener('click', s1a1)
  }

  function s1a1() {
    var incorrect = document.querySelector('#wrong');
    var wrong = document.createElement('p');
    wrong.textContent = 'Wrong!';
    incorrect.appendChild(wrong);
    incorrect.style.display ='inline'
  }
