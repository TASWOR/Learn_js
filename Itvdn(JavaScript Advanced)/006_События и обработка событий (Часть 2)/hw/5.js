window.onload=function () {
    var div=document.getElementById("div");
    window.addEventListener("keydown", press, false)
    function press(e) {
        reset();
        if(e.ctrlKey===true && e.shiftKey===true && e.keyCode===83){
           message("Сохранено все")
        }
        else if(e.ctrlKey===true&&e.keyCode===83) {
            message("Сохранено")
        }
        else if(e.ctrlKey===true&&e.keyCode===65){
           message("Выделено все")
        }

    }
    function reset() {
        div.innerHTML="";
    }
    function message(inf) {
        div.innerHTML += inf;
    }
};