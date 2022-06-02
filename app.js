function timeNow() {

const fullDate = new Date()

let hours = fullDate.getHours()
let minutes = fullDate.getMinutes()
let seconds = fullDate.getSeconds()


let days = new Array(7);
        days[0] = "Sunday";
        days[1] = "Monday";
        days[2] = "Tuesday";
        days[3] = "Wednesday";
        days[4] = "Thursday";
        days[5] = "Friday";
        days[6] = "Saturday";
let currentDay = days[fullDate.getDay()]

if(hours < 10) {
    hours = '0' + hours
}
if(minutes < 10) {
    minutes = '0' + minutes
}
if(seconds < 10) {
    seconds = '0' + seconds
}

document.getElementById('hour').innerHTML = hours + ' :'
document.getElementById('minute').innerHTML = minutes + ' :'
document.getElementById('second').innerHTML = seconds
document.getElementById('day').innerHTML = currentDay
}

setInterval(timeNow, 1000)

