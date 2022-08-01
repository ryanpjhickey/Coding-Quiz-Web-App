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
      timerA.innerHTML = "0";
      clearInterval(countdown);
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