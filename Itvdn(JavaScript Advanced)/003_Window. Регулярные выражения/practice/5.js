window.onload=function () {
    document.getElementById("butn").onclick = function () {
        var a = document.getElementById("val1");
        var b = document.getElementById("val2");
        var aInput=a.value;
        var bInput=b.value
        b.value = aInput;
        a.value=bInput;
    }
}
