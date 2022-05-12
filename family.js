const myDiv = document.getElementById("myDiv");
window.addEventListener("keydown", move);
let x = 0;
let y = 0;


function move(event){

    switch(event.key){
        case "ArrowDown":
            y+=5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowUp":
            y-=5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowRight":
            x+=5;
            myDiv.style.left = x + "px";
            break;
        case "ArrowLeft":
            x-=5;
            myDiv.style.left = x + "px";
            break;
        default:
            break;
        
    }
}
document.cookie = "firstName=Laplus; expires=Tue, 10 May 2000 C; path=/";
document.cookie = "lastName=Darkness; expires=10 May 2000; path=/"

console.log(document.cookie);

const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let paused = true;
let intervalid;
let secs = 0;
let mins = 0;
let hrs = 0;

startBtn.addEventListener("click", () =>{
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime; 
        intervalid = setInterval(updateTime, 1000)
    }
});

pauseBtn.addEventListener("click", ()=>{
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalid);
    }
});

resetBtn.addEventListener("click", ()=>{
    timeDisplay.textContent = "00:00:00";
    startTime = 0;
    elapsedTime = 0;
});


function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor(elapsedTime / 1000 % 60);
    mins = Math.floor((elapsedTime / (1000 *60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 *60 *60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;


    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}


console.log(startTime);
console.log(elapsedTime);
console.log(paused);