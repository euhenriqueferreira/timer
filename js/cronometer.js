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
function startTimer(){
    timer();
    interval = setInterval(timer, 1000);
}

// Pauses the cronometer
function pauseTimer(){
    clearInterval(interval);
}

// Stops the cronometer
function stopTimer(){
    clearInterval(interval);
    seconds = 0
    minutes = 0
    hours = 0
    document.getElementById('timer').innerText = "00:00:00";
}

// Cronometer function
function timer(){
    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;

        if(minutes == 60){
            hours++
            minutes = 0
        }
    }
    document.getElementById('timer').innerText = twoDigits(hours) + ":" + twoDigits(minutes) + ':' + twoDigits(seconds);
}