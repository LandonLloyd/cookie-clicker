let num = document.getElementById("num");
let acPrice = document.getElementById("ac-price");
let autoClickPrice = 50;

function scoreUp(){
  num.innerText++;
}

function auto(){
  if(num.innerText >= autoClickPrice){
    num.innerText = num.innerText - autoClickPrice;
    autoClickPrice = autoClickPrice + 25;
    acPrice.innerText = "Price: " + autoClickPrice + " Cookies";
    setInterval(function(){
      num.innerText++;
    }, 1000);
  }
}
