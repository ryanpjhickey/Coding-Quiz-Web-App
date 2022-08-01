var counter = 60
var countdown = function(){
  counter--;
  if(counter === 0) {
    clearInterval(strtcd);
  };
};

var strtcd = setInterval(countdown, 1000);

strt.addEventListener('click', countdown)