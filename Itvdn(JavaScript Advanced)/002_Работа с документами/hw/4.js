var get={};

get.class=function () {
    get.reset();
    var a = document.getElementsByClassName("class");
    for(var i = 0;i<a.length;i++){
        a[i].style.color="red";
    }
};
get.class2=function () {
    get.reset();
    var a=document.getElementsByClassName("class2");
    for(var i=0;i<a.length;i++){
        a[i].style.color="blue";
    }
};
get.borderClass = function () {
    get.reset();
    var a = document.getElementsByClassName("class");
    for(var i=0;i<a.length;i++){
        a[i].style.border="1px solid red";
    }
};
get.borderClass2=function () {
    get.reset()
    var a =document.getElementsByClassName("class2");
    for(var i=0;i<a.length;i++){
        a[i].style.border="1px solid blue";
    }
};
get.all=function () {
    get.reset();
    var a = document.getElementById("all");
    a.style.border="1px solid yellow";
};
get.yellow=function () {
    get.reset()
    var a = document.getElementById("all");
    for(var i = 0;i<a.childNodes.length;i++){
        if(a.childNodes[i].nodeType!==1){
            continue;
        }
        a.childNodes[i].style.color="yellow";
    }
};
get.reset= function () {
    var a = document.getElementById("all");
    for(var i=0;i<a.childNodes.length;i++){
        if(a.childNodes[i].nodeType!==1){
            continue;
        }
        a.childNodes[i].style.border="none";
        a.childNodes[i].style.color="black";
    }
    a.style.border="none";
};
get.add = function () {
    var a = document.getElementById("all");
    var add = document.createElement("p");
    add.innerHTML="New p";
    a.appendChild(add);
};
get.remove= function () {
    var a = document.getElementById("all");
    var item = a.lastChild;
    a.removeChild(item);
};