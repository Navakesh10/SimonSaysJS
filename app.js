let gameSeq = [];
let userSeq = [];


let btns = ["red","yellow","green","blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function() {
    if(started == false){
        console.log("game is started");
        started = true;
       
        levelup();
    
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout( function() {
       btn.classList.remove("flash"); 
    },200);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout( function() {
       btn.classList.remove("userflash"); 
    },200);
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let ranindex= Math.floor(Math.random() * 3);
    let randomcolor= btns[ranindex];
    let randombtn= document.querySelector(`.${randomcolor}`);
    gameSeq.push(randomcolor);
    console.log(gameSeq);
    gameflash(randombtn);
}

function checkans(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over!  Your score was <b>${level}</b> <br> Press any key to start.`; 
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        },150);

        reset();
    }
}

function btnpress() {
    let btn = this;
    userflash(btn);
    // console.log("btn pressed");
    usercolor= btn.getAttribute("id");
    userSeq.push(usercolor);

    checkans(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

