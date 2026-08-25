let time = 0

let interval 
let isRunning = false

let display = document.getElementById("stopwatch")

let startButton = document.getElementById("start")
let stopButton = document.getElementById("stop")
let resetButton = document.getElementById("reset")


function starts(){
    

    if (isRunning){
        return 
    }

    isRunning =  true

    interval = setInterval(()=>{

        updateDisplay()
        time += 1
    },1000)
}


function stop(){
    clearInterval(interval)
    isRunning = false
}

function reset(){
    clearInterval(interval)
    time = 0
    isRunning = false
    updateDisplay()
}

function updateDisplay(){
    let hours = Math.floor(time/3600)
    let minutes = Math.floor((time % 3600) / 60)
    let seconds = time % 60 
    if (hours < 10) {
            hours = "0" + hours
        }

        if (minutes < 10) {
            minutes = "0" + minutes
        }

        if (seconds < 10) {
            seconds = "0" + seconds
        }


        display.textContent = `${hours} : ${minutes} : ${seconds}`

}


startButton.addEventListener("click", starts)
stopButton.addEventListener("click", stop)
resetButton.addEventListener("click", reset)

updateDisplay()