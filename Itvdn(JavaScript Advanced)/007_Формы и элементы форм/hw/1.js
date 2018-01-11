window.onload=function () {
    var text = document.getElementById("text");
        window.addEventListener("submit",function (e) {
            reset();
            for(var i = 0;i<form1.elements.length;i++){
                if(form1.elements[i].value===""){
                    text.innerHTML+="Вы не заполнили " + form1.elements[i].name + "</br>";
                    e.preventDefault();
                }
            }
            if(form1.elements.password.value!==form1.elements.confirmationPassword.value){
                text.innerHTML+="Пароля должны совпадать";
                e.preventDefault();
            }

    });
    function reset() {
        text.innerHTML="";
    }
};