window.onload=function () {
    document.getElementById("btn").onclick = function () {
        var xml1 = new XMLHttpRequest();
        var xml2 = new XMLHttpRequest();
        xml1.open("GET", "hi.htm");
        xml2.open("GET", "name.html");
        xml1.onreadystatechange = function () {
            if (xml1.readyState === 4) {
                xml2.onreadystatechange = function () {
                    if (xml2.readyState === 4 && xml2.status === 200) {
                        document.getElementById("text").innerHTML += xml2.responseText;
                    }
                }
                xml2.send();
                if (xml1.status === 200) {
                    document.getElementById("text").innerHTML += xml1.responseText;

                }
            }
        };
        xml1.send();
    }
}