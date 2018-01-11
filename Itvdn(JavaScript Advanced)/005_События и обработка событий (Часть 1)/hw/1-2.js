window.onload=function () {
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
        document.getElementById("+").onclick = function () {
            alert(parseFloat(text1.value) + parseFloat(text2.value));
        }
        document.getElementById("-").onclick = function () {
            alert(parseFloat(text1.value) - parseFloat(text2.value));

        }
        document.getElementById("*").onclick = function () {
            alert(parseFloat(text1.value) * parseFloat(text2.value));

        }
        document.getElementById("/").onclick = function () {
            alert(parseFloat(text1.value) / parseFloat(text2.value));
        }
}