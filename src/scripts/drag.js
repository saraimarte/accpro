import dragula from 'dragula';
var scrollable = true;

var listener = function(e) {
    if (! scrollable) {
        e.preventDefault();
    }
}
document.addEventListener('touchmove', function() { e.preventDefault(); }, { passive:false });

function init() {
    var dropcontainers = [
      document.querySelector("#dragparent"),
      document.querySelector("#box1"), 
      document.querySelector("#box2")
    ];

    dragula(dropcontainers).on("drag", function(el){
        el.classList.remove("box1", "box2", "dragparent");
        scrollable = false;

    })
    dragula(dropcontainers).on("drop", function(el, target, source) {
      // check if the target container is dragparent or dragparent2
      var containerClass = target.id;
      // add the new class to the dropped element
      el.classList.add(containerClass);
      scrollable = true;

    })
  }

window.onload = function (){
  init();
  console.log("THE DRAG IS WORKINGGG");
}
