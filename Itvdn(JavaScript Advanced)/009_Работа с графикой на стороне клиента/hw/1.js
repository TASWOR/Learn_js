window.onload=function () {
var img = document.getElementsByTagName("img");
var p =document.getElementById("p");
for(var i=0;i<img.length;i++){
    timeout(img[i],i);
    p.innerHTML+=decodeURIComponent(img[i].src + "</br>");
}
function timeout(img) {
    setTimeout(function () {
        img.style.border="3px solid red";
    },i*1000)
}

};