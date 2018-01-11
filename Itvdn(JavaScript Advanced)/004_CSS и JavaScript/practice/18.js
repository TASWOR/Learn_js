window.onload=function () {
    var text1=document.getElementById("text1");
    var text2=document.getElementById("text2");
    text2.disabled=true
    document.getElementById("btn").onclick=function () {
    text2.value=text1.value*text1.value;
    }
}