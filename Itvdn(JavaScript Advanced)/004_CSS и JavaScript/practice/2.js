window.onload=function () {
    var text=document.getElementById("text");
    document.getElementById("btn2").onclick=function () {
        text.disabled=true;
    };
    document.getElementById("btn1").onclick=function () {
        text.disabled=false;
    }
};