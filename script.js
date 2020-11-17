let num = document.getElementById("num");
let acPrice = document.getElementById("ac-price");
let acCountp = document.getElementById("ac-count");
let acCount = 0;
let autoClickPrice = 100;

function scoreUp(){
  num.innerText++;
}

function auto(){
  if(num.innerText >= autoClickPrice){
    num.innerText = num.innerText - autoClickPrice;
    autoClickPrice = autoClickPrice + 25;
    acPrice.innerText = "Price: " + autoClickPrice + " Cookies";
    acCount++;
    acCountp.innerText = "You have " + acCount + " autoclickers";
    time = time + 250;
    setInterval(function(){
      num.innerText++;
    }, 1000);
  }
}
