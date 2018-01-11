
window.onload= function () {
    var fix=1;
    function elem()
{
    var all = {};
    var pars = location.search.substring(1);
    var info = pars.split("&");
    for (var i = 0; i < info.length; i++) {
        var pos = info[i].indexOf("=");
        var firstArg = info[i].substring(0, pos);
        var secondArg = info[i].substring(pos + 1);
        all[firstArg] = secondArg;
    }
    return all;
}
document.getElementById("sum").onclick = function () {
        if(fix===1) {
            var elems = elem();
            var createElement = document.createElement("p");
            var a = parseInt(elems.a);
            var b = parseInt(elems.b);
            var res = a + b;
            createElement.innerHTML = "First elem " + a + "</br>";
            createElement.innerHTML += "Second elem " + b + "</br>";
            createElement.innerHTML += "Summ = " + res;
            document.body.appendChild(createElement);
            fix=0;
        }

}
};