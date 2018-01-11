window.onload=function () {
    var message={};
    message.text = document.getElementById("text");
    document.getElementById("btn").onclick=function () {
        alert(eval(message.text.value));
    }
};