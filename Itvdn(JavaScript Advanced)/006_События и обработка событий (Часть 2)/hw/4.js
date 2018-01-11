window.onload=function () {
    var up=0;
    var left=0;
    var btn =document.getElementById("btn");
    btn.addEventListener("mousemove",go,false);
    function go(e) {
        up+=30;
        left+=30;
        btn.style.position="absolute";
        e.target.style.top=up+"px";
        e.target.style.left=left+"px";
    }
};