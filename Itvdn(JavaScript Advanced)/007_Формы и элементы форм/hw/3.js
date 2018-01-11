window.onload=function () {
    var login = document.getElementById("login");
    var mail= document.getElementById("mail");
    function all(name,text) {
        name.value=text;
        name.onfocus=function () {
            if(name.value===text) {
                name.value = ""
            }
        };
        name.onblur=function () {
            if(name.value==="") {
                name.value = text;
            }
        }
    }
    all(login,"Введите логин");
    all(mail,"Введите email")
}