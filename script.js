let num = document.getElementById("num");

let clicker = document.getElementById("clicker");

let acPrice = document.getElementById("ac-price");

let acCountp = document.getElementById("ac-count");

let acCount = 0;

let autoClickPrice = 100;

let score = 0;

let upgradeClickPrice = 500;

let ucPrice = document.getElementById("uc-price");

let ucCount = 1;

let ucCountp = document.getElementById("uc-count");

let getGrandmaPrice = 1000;

let gmaPrice = document.getElementById("gma-price");
 
let gmaCount = 0;

let gmaCountP = document.getElementById("gma-count");

let rocketPrice = 5000;

let rcktPrice = document.getElementById("rckt-price");

let rcktCount = 0;

let rcktCountP = document.getElementById("rckt-count");

function scoreUp(){
  num.innerText = score;
  score += ucCount;
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
    score = score - autoClickPrice;
    autoClickPrice = autoClickPrice + 100;
    acPrice.innerText = "Price: " + autoClickPrice + " Cookies";
    acCount++;
    acCountp.innerText = "You have " + acCount + " autoclickers";
    
    setInterval(function(){
      score++;
      num.innerText = score;
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
    score = score - upgradeClickPrice;
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

function grandma(){
  if(num.innerText >= getGrandmaPrice){
    num.innerText = num.innerText - getGrandmaPrice;
    score = score - getGrandmaPrice;
    getGrandmaPrice = getGrandmaPrice + 500;
    gmaPrice.innerText = "Price: " + getGrandmaPrice + " Cookies";
    gmaCount++;
    gmaCountP.innerText = "You have " + gmaCount + " Grandmas";
    setInterval(function(){
      score = score + 10;
      num.innerText = score;
    }, 1000);
  }else if(num.innerText < getGrandmaPrice){
    gmaPrice.innerText = "YOU DON'T HAVE ENOUGH COOKIES!";
    setTimeout(function(){
      gmaPrice.innerText = "Price: " + upgradeClickPrice + " Cookies";
    }, 3000);
  }
}


function rocket(){
  if(num.innerText >= rocketPrice){
    num.innerText = num.innerText - rocketPrice;
    score = score - rocketPrice;
    rocketPrice = rocketPrice + 1000;
    rcktPrice.innerText = "Price: " + rocketPrice + " Cookies";
    rcktCount++;
    rcktCountP.innerText = "You have " + rcktCount + " rockets";
    setInterval(function(){
      score = score + 50;
      num.innerText = score;
    }, 1000);
  }else if(num.innerText < rocketPrice){
    rcktPrice.innerText = "YOU DON'T HAVE ENOUGH COOKIES!";
    setTimeout(function(){
      rcktPrice.innerText = "Price: " + rocketPrice + " Cookies";
    }, 3000);
  }
}
