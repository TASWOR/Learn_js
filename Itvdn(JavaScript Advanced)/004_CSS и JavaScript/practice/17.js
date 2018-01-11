window.onload=function () {
    document.getElementById("btn").onclick=function () {
        var text1=document.getElementById("text1");
        var text2=document.getElementById("text2");
        var value1=text1.value;
        var value2=text2.value;
        text1.value=value2;
        text2.value=value1;
    }

}