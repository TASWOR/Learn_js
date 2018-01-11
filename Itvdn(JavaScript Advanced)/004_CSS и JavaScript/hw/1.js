window.onload=function () {
    var counter=0;
    var div = document.getElementsByTagName("div");
    document.getElementById("btn").onclick=function () {
        reset();
        if(counter<5) {
            div[counter].style.backgroundColor = "red";
            counter++;
            if(counter===5){
                counter=0;
            }
        }
    };
    function reset() {
        for(var i=0;i<div.length;i++){
            div[i].style.backgroundColor="green";
        }
    }
};