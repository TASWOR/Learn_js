window.onload=function () {
    var btn2 = document.getElementById("btn2");
    var btn1 = document.getElementById("btn1");
    btn2.style.display="none";
    document.getElementById("btn1").onclick=function () {
        btn1.disabled=true;
    btn2.style.display="inline-block";
    };
    document.getElementById("btn2").onclick=function () {
        btn2.style.display="none";
        btn1.disabled=false;

    }
};