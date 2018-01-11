window.onload=function () {
    var message={};
    var file;
    var flag=0;
    var a=document.getElementsByTagName("a");
    for(var i =0;i<a.length;i++){
        a[i].onclick=function () {
            if(flag===0) {
                file =window.open("http://itvdn.com", "Itvdn", "width=180,height=180");
                flag=1;
            }
            else{
                file.close();
                flag=0
            }
        }
    }
};