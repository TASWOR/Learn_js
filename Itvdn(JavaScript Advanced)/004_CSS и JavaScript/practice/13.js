window.onload=function () {
    var text=document.getElementById("text")
    document.getElementById("btn1").onclick=function () {
        text.style.display="none"
    };
    document.getElementById("btn2").onclick=function () {
        text.style.display="inline-block";
    }
}