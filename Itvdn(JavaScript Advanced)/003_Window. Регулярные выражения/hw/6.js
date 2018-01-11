window.onload=function () {
document.getElementById("info").onclick=function () {
    var text = document.getElementById("text");
    var createElement=document.createElement("marquee");
    createElement.innerHTML=text.value;
    createElement.setAttribute("behavior","alternate");
    createElement.setAttribute("direction","left");
    document.body.appendChild(createElement);

}
};