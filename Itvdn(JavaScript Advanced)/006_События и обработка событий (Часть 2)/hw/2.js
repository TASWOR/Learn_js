window.onload=function () {
    var flag=false;
    document.getElementById("save").onclick=function () {
        flag=true;
    };
    var text=document.getElementById("text");
    window.onbeforeunload=function () {
        if(!flag&&text.value.length!==0){
            return "fd";
        }
    }
}