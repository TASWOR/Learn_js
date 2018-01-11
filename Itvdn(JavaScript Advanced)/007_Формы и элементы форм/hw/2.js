window.onload=function () {
    var price=document.getElementById("price");
    var cost=0;
    var ingr=0;
  for(all in sizes.elements){
      var inf=sizes.elements[all];
      inf.onchange=function (e) {
          reset();
          if(e.target.type==="radio"&&e.target.value==="Small"){
              cost=100;
          }
          else if(e.target.type==="radio"&&e.target.value==="Medium"){
              cost=150;
          }
          else if(e.target.type==="radio"&&e.target.value==="Big"){
              cost=200;
          }
          else if(e.target.type==="checkbox"){
              if(e.target.checked===true) {
                  ingr+=15;
              }
              else if(e.target.checked===false){
                  ingr-=15;

              }
          }
          price.innerHTML+=cost+ingr;
      }
  }
  function reset() {
      price.innerHTML="Ваша цена:"
  }
};