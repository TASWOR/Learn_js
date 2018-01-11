window.addEventListener("keypress",changeColor,false);
var input = document.getElementsByTagName("input");
function changeColor(e) {
if(String.fromCharCode(e.charCode)==="r"){
    for(var i=0;i<input.length;i++){
        input[i].style.color="red";
    }
}
else if (String.fromCharCode(e.charCode)==="g"){
    for (var i=0;i<input.length;i++){
        input[i].style.color="green"
    }
}
else if(String.fromCharCode(e.charCode)==="a"||String.fromCharCode(e.charCode)==="b"){
    for(var i =0;i<input.length;i++){
        input[i].style.color="blue";
    }
}
}