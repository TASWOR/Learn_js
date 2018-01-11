window.onload=function () {
    var timer={};
    var hours=0;
    var minutes=0;
    var seconds=0;
    var fix=1;
    var time;
    timer.go = function() {
        var a = document.getElementById("timer");
        a.innerHTML = hours + ":" + minutes + ":" + seconds;
            fix=0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
    };
    document.getElementById("startButton").onclick=function () {
        if (fix === 1) {
            fix=0;
        time = setInterval(timer.go,10);
        }
    };
    document.getElementById("stopButton").onclick=function () {
        clearInterval(time);
        fix=1;
    };
    document.getElementById("reset").onclick=function () {
         hours=0;
         minutes=0;
         seconds=0;
        var a = document.getElementById("timer");
        a.innerHTML = hours + ":" + minutes + ":" + seconds;
    }
};
