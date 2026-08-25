let clock = document.getElementById("clock")
let dateDisplay = document.getElementById("date")


setInterval(() => {
    let date = new Date()
    
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    // let day = date.getDate()
    // let month = date.getMonth()
    // let year = date.getFullYear()

    let formattedDate = date.toLocaleDateString("en-US",{
        weekday : "long",
        month : "long",
        day : "numeric",
        year: "numeric"
    })

    let period
    if (hours == 0){
        period = "AM"
    }
    else if (hours === 12){
        period = "PM"
    }
    else if (hours > 12){
        hours = hours - 12
        period = "PM"
    }
    else{
        period = "AM"
    }

    if (hours < 10){
        hours = "0" + hours
    }

    if (minutes < 10){
        minutes = "0" + minutes 
    }
    if (seconds < 10){
        seconds = "0" + seconds
    }

    clock.textContent = `${hours} : ${minutes} : ${seconds} ${period}`
    dateDisplay.textContent = formattedDate
},1000)