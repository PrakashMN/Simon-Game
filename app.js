let gemeseq = [];
let userseq = [];

let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(event) {
    if(started == false){
        console.log("Game Started:");
        started = true;
        levelUp();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}


function levelUp() {
    userseq = [];
    level++;
    h2.innerHTML = "Level " + level;
    let randomIndex = Math.floor(Math.random() * btns.length);
    let randcolor = btns[randomIndex];
    let randbtn = document.querySelector("." + randcolor);
    gemeseq.push(randcolor);
    console.log(gemeseq);
    btnflash(randbtn);
}

function checkseq(ldx){
    if (userseq[ldx] === gemeseq[ldx]) {
       if (userseq.length === gemeseq.length) {
            setTimeout(levelUp, 1000);
       }      
    }else {
        h2.innerHTML = `Game Over! Your Score:<b>${level} <br> Press Any Key to Restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },50);
        resetGame();
    }
}
resetGame = function() {
    started = false;
    level = 0;
    gemeseq = [];
    userseq = [];
    console.log("Game Restarted");
}
function btnpress() {
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkseq(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnpress);
}

