(function () {
    function Info(x,y) {
        this.x=x;
        this.y=y;
    }
    Info.prototype.sum=function () {
        alert(this.x+this.y);
    }
    var treug= new Info(5,4);
    treug.sum();
})();