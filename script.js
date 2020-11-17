let num = document.getElementById("num");

let clicker = document.getElementById("clicker");

let acPrice = document.getElementById("ac-price");

let acCountp = document.getElementById("ac-count");

let acCount = 0;

let autoClickPrice = 100;

let upgradeClickPrice = 500;

let ucPrice = document.getElementById("uc-price");

let ucCount = 1;

let ucCountp = document.getElementById("uc-count");

function scoreUp(){
  num.innerText++;
  clicker.style.height = 53 + "vh";
  clicker.style.width = 53 + "%";
}

function mouseOver(){
  clicker.style.height = 51 + "vh";
  clicker.style.width = 51 + "%";
}

function mouseUp(){
  clicker.style.height = 50 + "vh";
  clicker.style.width = 50 + "%";
}

function mouseOut(){
  clicker.style.height = 50 + "vh";
  clicker.style.width = 50 + "%";
}

function auto(){
  if(num.innerText >= autoClickPrice){
    num.innerText = num.innerText - autoClickPrice;
    autoClickPrice = autoClickPrice + 100;
    acPrice.innerText = "Price: " + autoClickPrice + " Cookies";
    acCount++;
    acCountp.innerText = "You have " + acCount + " autoclickers";
    
    setInterval(function(){
      num.innerText++;
    }, 1000);
  }else if(num.innerText < autoClickPrice){
    acPrice.innerText = "YOU DON'T HAVE ENOUGH COOKIES!";
    setTimeout(function(){
      acPrice.innerText = "Price: " + autoClickPrice + " Cookies";
    }, 3000);
  }
  if(acCount === 1 || 0){
    acCountP.innerText = "You have " + acCount + " autoclicker";
  }else{
    acCountP.innerText = "You have " + acCount + " autoclickers";
  }
}


function upgradeClicker(){
  if(num.innerText >= upgradeClickPrice){
    num.innerText = num.innerText - upgradeClickPrice;
    upgradeClickPrice = upgradeClickPrice + 250;
    ucPrice.innerText = "Price: " + upgradeClickPrice + " Cookies";
    ucCount++;
    ucCountp.innerText = "You click for " + ucCount + " Cookies";
  }else if(num.innerText < upgradeClickPrice){
    ucPrice.innerText = "YOU DON'T HAVE ENOUGH COOKIES!";
    setTimeout(function(){
      ucPrice.innerText = "Price: " + upgradeClickPrice + " Cookies";
    }, 3000);
  }
}
