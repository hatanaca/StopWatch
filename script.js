let [hours, minutes, seconds] = [0,0,0];
// Destructure, we also may use to declare variables
let displayTime = document.getElementById("displayTime");
// Reference to object DOM
let timer = null;
// intentionally a void variable

// Increment function
function stopwatch() {
    seconds++
    if(seconds == 60){
        seconds = 0
        minutes++;
        if(minutes == 60){
            minutes = 0
            hours++;
        } 
    }
    // implicit concatening
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    displayTime.innerHTML = h + ":" + m + ":" + s;
}
// clearInterval used to stop setInterval
function watchStart(){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}

function watchStop(){
    clearInterval(timer);
}


function watchReset(){
    clearInterval(timer);
    [hours, minutes, seconds] = [0,0,0];
    displayTime.innerHTML = "00:00:00"

}