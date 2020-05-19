let counter = 0;
let sCounter = document.getElementById('count');

let btnPressed = false;

let btn = document.getElementById('btnStart');
let time = document.getElementById("timer");

var seconds = 60;
var timer;

function myFunction() {
    if (seconds < 60) {
        time.innerHTML = "00:" + seconds;
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




btn.onclick = () => {
    btnPressed = true;
    if (!timer) {
        timer = window.setInterval(function() {
            myFunction();
            if (seconds < 0 && counter >= 400) {
                window.alert('CONGRATULATIONS.....');
            } else if (seconds < 0 && counter < 400) {
                window.alert('SORRY.....');
            }
        }, 1000);

        document.addEventListener("keyup", function(e) {
            if (e.keyCode == 32) {
                counter += 1;
                sCounter.innerHTML = counter;
            }
        })

    }

}


document.getElementById("timer").innerHTML = "01:00";
