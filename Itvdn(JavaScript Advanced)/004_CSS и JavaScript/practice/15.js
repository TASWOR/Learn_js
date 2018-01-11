window.onload=function () {
    var btn=document.getElementById("btn");
    btn.style.width="300px";
    document.getElementById("btn").onclick=function () {
        btn.value++;
    }
};