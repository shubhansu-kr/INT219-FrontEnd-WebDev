const clockDiv = document.getElementById("clockDiv");
const timerDiv = document.getElementById("timerDiv");
const stopWatchDiv = document.getElementById("stopWatchDiv");
const timeSpan = document.getElementById("time");

const minSpan = document.getElementById("min");
const secSpan = document.getElementById("sec");

let min = 0, sec = 0;

const load = () => {
    showClock();
}
// clockDiv.addEventListener("click", hide);

const hide = () => {
    clockDiv.setAttribute("style", "display: none");
    timerDiv.setAttribute("style", "display: none");
    stopWatchDiv.setAttribute("style", "display: none");
}

const showClock = ()=>{
    hide();
    clockDiv.setAttribute("style", "display: block");

    const clockIntervalPid = setInterval(() => {
        timeSpan.innerText = new Date();
    }, 1000);
}

const showTimer = () => {
    hide();
    timerDiv.setAttribute("style", "display: block");

}

const startTimer = () => {
    const startTimerPid = setInterval(() => {
        ++sec;
        if (sec == 60) {
            sec = 0;
            ++min;
        }
        minSpan.innerText = String

    }, 1000);
}

const pauseTimer = () => {

}

const resetTimer = () => {

}


const showStopWatch = () => {
    hide();
    stopWatchDiv.setAttribute("style", "display: block");
}

console.log("sdklfafd");

