window.onload=function () {
    var rand =Math.floor(Math.random()*(100-1)) +1;
    var counter =0;
    answer = document.getElementById("answer");
document.getElementById("btn").onclick=function () {
   var text = document.getElementById("text");
   if(text.value==rand){
       answer.style.background="green";
    answer.innerHTML="Поздравляю вы угали с " + counter + " попытки!";
   }
   else if(text.value>rand){
           answer.style.background="red";
           answer.innerHTML="Загаданное число меньше";
           counter++
       }
       else {
           answer.style.background="yellow";
           answer.innerHTML="Загаданное число больше";
           counter++
       }

}
};