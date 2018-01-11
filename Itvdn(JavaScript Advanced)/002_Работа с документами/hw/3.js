var add={};
add.paragraph=function () {
    var div = document.getElementById("P");
    var add = document.createElement("p");
    add.innerHTML="New Paragraph";
    if(div.childNodes.length+1>10){
        for(var i=0;i<div.childNodes.length;) {
            div.removeChild(div.childNodes[i]);
        }
    }
    else{
        div.appendChild(add);
    }

}