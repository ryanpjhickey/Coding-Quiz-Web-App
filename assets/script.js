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

timerA.innerHTML = "60";

function setCounterText() { 
  console.log(counter);
  counter--;
  timerA.innerHTML = counter;
  startQuiz.style.display = 'none';
  hide.style.display = 'none';
  hide2.style.display = 'none';
  if(counter === 60){
    var countdown = setInterval(setCounterText, 1000);
  } else if(counter <= -1){
      timerA.innerHTML = "0"
    }
  };