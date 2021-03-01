const start = document.querySelector("#start-button");
const stop = document.querySelector("#stop-button");
let reset = document.querySelector("#reset-button");
const display = document.querySelector("#display");

let isStop = true;
let isClickAgain = false;
let s = 0, m = 0, h = 0;
let begin;

function startTimer() {
    s = s + 1;
    if (s >= 10) {
        if (s == 60) {
            s = 0;
            m++;
        }
        if (m >= 10) {
            if (m == 60) {
                m = 0;
                h++;
            }
            if (h >= 10) {
                display.innerHTML = `${h}:0${m}:0${s}`;
            } else {
                if (s == 0) {
                    display.innerHTML = `0${h}:${m}:0${s}`;
                } else {
                    display.innerHTML = `0${h}:${m}:${s}`;
                }

            }

        } else {
            if (s == 0) {
                display.innerHTML = `0${h}:0${m}:0${s}`;
            } else {
                display.innerHTML = `0${h}:0${m}:${s}`;
            }

        }
    } else if (s < 10) {
        if (m < 10) {
            if (h >= 10) {
                display.innerHTML = `${h}:0${m}:0${s}`;
            } else {
                display.innerHTML = `0${h}:0${m}:0${s}`;
            }
        } else if (m >= 10) {
            if (h >= 10) {
                display.innerHTML = `${h}:${m}:0${s}`;
            } else {
                display.innerHTML = `0${h}:${m}:0${s}`;
            }
        }

    }

}


start.addEventListener("click", () => {
    isStop = false;
    if (isStop == false && isClickAgain == false) {
        isClickAgain = true;
        begin = setInterval(startTimer, 1000);

    }

});


stop.addEventListener("click", () => {
    isClickAgain = false;
    clearInterval(begin);
})



reset.addEventListener('click', () => {
    display.innerHTML = `00:00:00`;
    s = 0;
    m = 0;
    h = 0;
    clearInterval(begin);
    isClickAgain = false;
})
