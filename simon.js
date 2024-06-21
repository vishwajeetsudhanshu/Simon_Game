let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector('h2');

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();

    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash")
    },250)
  
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash")
    },250)
  
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let ranIdx=Math.floor(Math.random()*3);
    let rancolor=btns[ranIdx];
    let ranbtn=document.querySelector(`.${rancolor}`);
    // console.log(ranIdx);
    // console.log(rancolor);
    // console.log(ranbtn);
    gameseq.push(rancolor);
    console.log(gameseq);
    gameflash(ranbtn);
}

function checkans(idx){
    //console.log("curr level: ",level);
    
    if(userseq[idx]=== gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000)
        }
    } else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
            }, 150);

        reset();

    }
}


function btnpress(){
    // console.log(this)
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}


let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;


}