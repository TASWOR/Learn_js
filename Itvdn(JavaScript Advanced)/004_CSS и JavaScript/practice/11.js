window.onload=function () {
    var img = document.getElementById("img");
    document.getElementById("img").onmouseover=function () {
        img.src="http://theory.phphtml.net/exercises/javascript/dom/osnovy-raboty-s-dom-v-javascript/2/3/2.jpg";
    };

    document.getElementById("img").onmouseout=function () {
        img.src="http://theory.phphtml.net/exercises/javascript/dom/osnovy-raboty-s-dom-v-javascript/2/3/1.jpg";

    }
};