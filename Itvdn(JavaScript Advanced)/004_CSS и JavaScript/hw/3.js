window.onload=function () {
    var user = {user:"admin",password:12345};
    document.getElementById("btn").onclick=function () {
        var login = document.getElementById("login");
        var password = document.getElementById("password");

        if(password.value===""&&login.value===""){
            createElement("Вы не ввели логин и пароль");
            login.style.background="red";
            password.style.background="red"
        }
        else if(login.value===""){
            createElement("Вы не ввели логин");
            login.style.background="red"
        }
        else if(password.value===""){
            createElement("Вы не ввели пароль");
            password.style.background="red"
        }
        else{
            if((user.user===login.value)&&(String(user.password)===password.value)){
               createElement("Вы авторизованы",login.value);
            }
            else{
                createElement("Вы не зарегестрированны")
            }

        }
        function createElement(text,acc) {
            var message = document.getElementById("text");
            message.innerHTML = text;
            document.body.appendChild(message);
            message.style.textAlign = "center";
            message.style.display="block";
            if(message.innerHTML==="Вы авторизованы") {
                message.innerHTML+="</br> Добро пожаловать " + acc;
                message.style.color = "green";
                var login = document.getElementById("login");
                var password = document.getElementById("password");
                var btn = document.getElementById("btn");
                var box = document.getElementById("box");
                var boxText = document.getElementById("box_text");
                login.style.display = "none";
                password.style.display = "none";
                btn.style.display = "none";
                box.style.display = "none";
                boxText.style.display = "none";
            }
        }
    }
};