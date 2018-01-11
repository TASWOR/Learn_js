window.onload=function () {
    function getId(id,img) {
         document.getElementById(id);
        newHeight="300";
        newWidth= "450";
        oldHeight=img.height;
        oldWidth=img.width;
        var flag=true;
        img.onclick=function () {
            if(flag) {
                img.height = newHeight;
                img.width = newWidth;
            }
            else{
                img.height=oldHeight;
                img.width=oldWidth;
            }
            flag=!flag
         }
    }
    getId("btn1",btn1);
    getId("btn1",btn2);
    getId("btn1",btn3)

}