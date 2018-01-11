window.onload=function () {
    var text1=document.getElementById("text1");
    var text2=document.getElementById("text2");
    text2.disabled=true;
    var res=0;
    document.getElementById("btn").onclick=function () {
        if(!isNaN(text1.value)){
            text2.value=text1.value*text1.value;
        }
        else{
            alert("Вы ввели не число!")
        }
    }
}