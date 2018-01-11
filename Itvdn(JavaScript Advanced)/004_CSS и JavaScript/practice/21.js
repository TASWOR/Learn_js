window.onload=function () {
    var calc = document.getElementById("calc");
    for(var i =0;i<calc.childNodes.length;i++){
        if(calc.childNodes[i].nodeType===1) {
            calc.childNodes[i].style.margin = "5px";
            calc.childNodes[i].style.width = "35px";
            calc.childNodes[i].style.height = "25px";
        }
}
    var text=document.getElementById("text");
    text.disabled=true;
    text.style.width="230px";
    document.getElementById("0").style.width="84px";
    function write(element) {
        document.getElementById(element).onclick=function () {
            var btn=document.getElementById(element);
            var res=btn.value;

            if(res==="="){
                text.value=eval(text.value);
            }
            else if(res==="C"){
                text.value=null;
            }
            else if(res==="←"){
                var ar=text.value.split("");
                ar.pop();
                ar = ar.join("");
                text.value=ar;
            }
            else if(res==="✓"){
                var sqr=text.value.split("");
                var sqra =sqr.pop();
                if(sqra==="+"||sqra==="-"||sqra==="*"||sqra==="/")
                {
                    sqr=sqr.join("");
                    text.value=eval(sqr);
                    text.value=text.value*text.value;
                }
                else
                {
                    text.value=eval(text.value);
                    text.value = text.value * text.value;
                }

            }
            else{
            text.value+=res;
                }
        };
    }
    write("0");
    write("1");
    write("2");
    write("3");
    write("4");
    write("5");
    write("6");
    write("7");
    write("8");
    write("9");
    write("+");
    write("-");
    write("*");
    write("/");
    write("=");
    write("Res");
    write("to4ka");
    write("arrow");
    write("Sqrt");
}