window.addEventListener("load",function () {
    var name=document.getElementById("name");
    var pass=document.getElementById("password");
    var mail=document.getElementById("mail");
    add(name,"name");
    add(pass,"password");
    add(mail,"mail");
    function add(table,nameT) {
        document.forms[0].addEventListener("submit", function (e) {
            if (table.value.length === 0) {
                e.preventDefault();
                alert("Введите " + nameT);
            }
        },false)
    }
},false);