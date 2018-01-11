

var file = {};

file.allParaph=function () {
    var par = document.getElementsByTagName("p");
    for (var i = 0; i < par.length; i++) {
            node = par[i].style.border = "1px solid red";
    }
};
    file.allSite=function () {
        var site = document.getElementsByTagName("a");
        for(var i=0;i<site.length;i++){
            site[i].style.border="1px solid blue";
        }
    };
file.divan= function () {
    var site = document.getElementById("test_div");
    site.style.border ="1px solid black";
};