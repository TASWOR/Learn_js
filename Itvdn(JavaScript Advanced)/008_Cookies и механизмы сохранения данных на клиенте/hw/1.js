window.onload=function () {
    var date = new Date();
    document.cookie="Сегодня дата = " + date + ";max-age=" + 2592000;
    alert(document.cookie);
}