import dragula from 'dragula';


function init() {
    var dropcontainers = [
      document.querySelector("#dragparent"),
      document.querySelector("#box1"), 
      document.querySelector("#box2")
    ];

    dragula(dropcontainers).on("drag", function(el){
        el.classList.remove("box1", "box2", "dragparent");
    })
    dragula(dropcontainers).on("drop", function(el, target, source) {
      var containerClass = target.id;
      // check if the target container is dragparent or dragparent2
      el.classList.add(containerClass);
    })
  }

window.onload = function (){
  init();
  console.log("THE DRAG IS WORKINGGG");
}