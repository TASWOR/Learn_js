window.onload=function () {
    function getId(id) {
        return document.getElementById(id);
    }
    if(localStorage.color!==""&&localStorage.sizeText!=="")
    {
        document.body.style.backgroundColor=localStorage.color;
        document.body.style.fontSize= localStorage.sizeText;

    }
    getId("btn").onclick=function () {
        for(var i = 0;i<getId("color").length;i++){
            if(getId("color")[i].selected) {
                localStorage.color = getId("color")[i].value;
                document.body.style.backgroundColor=localStorage.color;
            }
        }
        var reg = /^\d+$/;
        if(reg.test(getId("text").value)){
            localStorage.sizeText = getId("text").value;
            document.body.style.fontSize = localStorage.sizeText;

        }
        else {
            getId("text").value="Введите число";
        }
    }
};