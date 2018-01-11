window.onload=function () {
document.getElementById("btn").onclick=function () {
  var btn = document.getElementById("btn");
  btn.value="Новый текст";
  btn.disabled=true;
}
};