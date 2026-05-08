let hn = 0;
let timer = 60;
let bubble = "";
let score = 0;
let ran = 0;
// let ran = Math.floor(Math.random()*10);

function getScore(){
    score = score + 10;
    document.querySelector("#score").textContent = score;
}

 let bob = document.querySelector("#bpanel");
 bob.addEventListener("click",function blast(e) { 
    let hitnum = Number(e.target.textContent);
    if(hitnum === ran){
        getScore();
        hitNumber();
        makeBubble();
    }

    
    
    
});

function makeBubble() {
    bubble = document.querySelector("#bpanel");
    bubble.innerHTML = "";
    for (let i = 1; i<=108; i++){
        let rannum = Math.floor(Math.random()*10);
        bubble.innerHTML += `<div class="bubble">${rannum}</div>`;
    }
}


function runTimer(){
    let timeinterval = setInterval(function() {
        let time = document.querySelector("#time");
        time.innerHTML = timer--;
        if(timer===0 || timer<=0){
            clearInterval(timeinterval);
            document.querySelector("#bpanel").innerHTML = "<h1>Game Over</h1>";
        }
    },1000);

}

function hitNumber() {
    ran = Math.floor(Math.random()*10)
    hn = document.querySelector("#hitnumber");
    hn.textContent = ran;
}

runTimer();
makeBubble();
hitNumber();