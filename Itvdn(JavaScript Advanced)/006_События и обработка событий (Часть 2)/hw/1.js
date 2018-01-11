window.addEventListener("keydown",press,false);
var up = 0;
var left = 0;
function press(e) {
    var div = document.getElementsByTagName("div")[0];
    if(e.keyCode===38){
        up-=10;
        div.style.top=up+"px";
    }
    else if(e.keyCode===40){
        up+=10;
        div.style.top=up+"px";
    }
    else if(e.keyCode===37){
        left-=10;
        div.style.left=left+"px";
    }
    else if(e.keyCode===39){
        left+=10;
        div.style.left=left+"px";
    }
}