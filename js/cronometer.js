var seconds = 0;
var minutes = 0;
var hours = 0;
var interval;

// Add a digit on one digit number
function twoDigits(num){
    if(num<10){
        return("0"+num)
    } else{return(num)}
}

// Starts the cronometer
function startCronometer(){
    interval = setInterval(cronometer, 1);
}

// Pauses the cronometer
function pauseCronometer(){
    clearInterval(interval);
}

// Stops the cronometer
function stopCronometer(){
    clearInterval(interval);
    seconds = 0
    minutes = 0
    hours = 0
    document.getElementById('cronometer').innerText = "00:00:00";
}

// Cronometer function
function cronometer(){
    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;

        if(minutes == 60){
            hours++
            minutes = 0
        }
    }
    document.getElementById('cronometer').innerText = twoDigits(hours) + ":" + twoDigits(minutes) + ':' + twoDigits(seconds);
}