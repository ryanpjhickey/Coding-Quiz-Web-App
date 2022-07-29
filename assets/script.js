

const start = document.getElementsById('#start')

start.addEventListner("click", timer)

function timer(){
    var counter = 60;
   setInterval(function() {
     counter--;
      if (counter >= 0) {
         span = document.getElementById("#timeleft");
         span.innerHTML = counter;
      }
      if (counter === 0) {
         clearInterval(counter);
       }
     }, 1000);
}