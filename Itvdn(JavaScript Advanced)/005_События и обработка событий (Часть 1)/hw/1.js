window.addEventListener("load",function () {
    var text1=document.getElementById("text1");
    var text2=document.getElementById("text2");
    text1.addEventListener("keypress",function (e) {
        if(String.fromCharCode(e.charCode)>"9")
        {
            e.preventDefault();
        }
    },false);
    text2.addEventListener("keypress",function (e) {
        if(String.fromCharCode(e.charCode)>"9"){
            e.preventDefault();
        }
    },false);
    document.getElementById("+").addEventListener("click",function () {
        alert(parseFloat(text1.value)+parseFloat(text2.value));
    },false)
    document.getElementById("-").addEventListener("click",function () {
        alert(parseFloat(text1.value)-parseFloat(text2.value))
    },false)
    document.getElementById("/").addEventListener("click",function () {
        alert(parseFloat(text1.value)/parseFloat(text2.value))
    },false)
    document.getElementById("*").addEventListener("click",function () {
        alert(parseFloat(text1.value)*parseFloat(text2.value))
    },false)
})