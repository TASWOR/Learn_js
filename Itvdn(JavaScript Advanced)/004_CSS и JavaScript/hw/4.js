window.onload=function () {
    var block1=document.getElementById("block1");
    var block2=document.getElementById("block2");
    var block3=document.getElementById("block3");
    block1.style.position="absolute";
    block2.style.position="absolute";
    block3.style.position="absolute";

    setInterval(function block() {
        pos(block1);
        pos(block2);
        pos(block3);
    },500);
    function pos(block) {
        block.style.top=Math.floor(Math.random()*(550-1)+1) + "px";
        block.style.left=Math.floor(Math.random()*(1200-1)+1) + "px";
        block.style.backgroundColor="hsl(" + Math.floor(Math.random()*(360-1)+1) + ",100%,50%)";
    }
};