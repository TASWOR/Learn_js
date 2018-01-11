window.onload=function () {
    document.getElementById("btn").onclick=function () {
        var btn = document.getElementById("btn");
        btn.disabled=true;
        btn.style.cursor="not-allowed"
    }
}