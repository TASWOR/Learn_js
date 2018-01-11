window.onload=function () {
    timer("up");
    timer("down");
    timer("left");
    timer("right");
    var counterX=0;
    var counterY=0;
    function timer(element) {
        document.getElementById(element).onclick = function () {
                setInterval(function () {
                    var ananas = document.getElementById("ananasik");
                    ananas.style.position = "absolute";
                    if (element === "down") {
                        ananas.style.top = counterX++ + "px";
                    }
                    if (counterX === 450) {
                        counterX = -320;
                    }
                    else if (element === "up") {
                        ananas.style.top = counterX-- + "px";
                        if (counterX === -320) {
                            counterX = 420;
                        }
                    }
                    else if (element==="right"){
                        ananas.style.left= counterY++ + "px";
                        if (counterY ===680) {
                            counterY = -750;
                        }
                    }
                    else if (element==="left"){
                        ananas.style.left= counterY-- + "px";
                        if (counterY ===-750) {
                            counterY = 680;
                        }
                    }
                }, 10);
        }
    }
};