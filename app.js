let counter = 0;
let sCounter = document.getElementById('count');

var btnPressed = false;

let btnStart = document.getElementById('btnStart');
let btnReset = document.getElementById('btnReset');
let time = document.getElementById("timer");


var seconds = 60;
var timer;

function myFunction() {
    if (seconds < 60) {
        time.innerHTML = "00:" + seconds;
    }
    if (seconds < 10) {
        time.innerHTML = "00:0" + seconds;
    }
    if (seconds >= 0) {
        seconds--;
        if (seconds < 0) {
            clearInterval(timer);
        }
    } else {
        clearInterval(timer);
    }
}

btnReset.onclick = () => {
    location.reload();
}

function timeOut() {
    setTimeout(function() { location.reload(); }, 10000);
}

btnStart.onclick = () => {
    btnPressed = true;
    if (!timer) {
        timer = window.setInterval(function() {
            myFunction();
            if (seconds < 0 && counter >= 400) {
                winnerResult = 'CONGRATULATIONS. You pressed the spacebar ' + counter + ' times in a minute. ';
                infoResult = 'Game will restart in 10 seconds.';

                result.innerHTML = winnerResult;
                info.innerHTML = infoResult;
                timeOut();
            } else if (seconds < 0 && counter < 400) {
                loserResult = 'SORRY! You pressed the spacebar only ' + counter + ' times. ';
                infoResult = 'Game will restart in 10 seconds.';

                result.innerHTML = loserResult;
                info.innerHTML = infoResult;
                timeOut();

            }
        }, 1000);

        document.addEventListener("keyup", function(e) {
            if (e.keyCode == 32) {
                counter += 1;
                sCounter.innerHTML = counter;
            }
        });
    }
}


document.getElementById("timer").innerHTML = "01:00";


//Get full year
let year = document.getElementById('fullYear');
let date = new Date();

year.innerHTML = date.getFullYear();
