
console.log('hi')

var strt = document.querySelector('#start')

function timer(){
    var counter = 60;
   setInterval(function() {
     counter--;
      if (counter >= 0) {
         span = document.querySelector('#timeleft');
         span = counter;
      }
      if (counter === 0) {
         clearInterval(counter);
       }
     }, 1000);
}

function timerdisplay() {
    var disp = timer();
    document.querySelector('#timeleft').value = disp;
}

strt.addEventListener('click', timer)