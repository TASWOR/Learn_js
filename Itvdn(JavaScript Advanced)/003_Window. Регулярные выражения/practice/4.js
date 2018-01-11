window.onload=function () {
    document.getElementById("butn").onclick=function () {
        var a = document.getElementById("val");
        var res = a.value*a.value;
        if (isNaN(res)){
            alert("Вы ввели не число");
    }
    else {
            alert(res);
        }
    };
};
