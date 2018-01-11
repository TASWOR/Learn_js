window.onload=function () {
    function viewImg(name,element,format) {
        document.getElementById(element);
        name.onclick=function () {
            img.src="img/" + element + format;
        }
    }
    var arr=[];
    function addImg() {
        for(var i =0;i<addImg.arguments.length;i++){
            arr[i]=new Image();
            arr[i].src=addImg.arguments[i];
        }
    }
    addImg("img/js.png","img/css.jpg","img/html.jpg")
    viewImg(html,"html",".jpg");
    viewImg(css,"css",".jpg");
    viewImg(js,"js",".png");
}