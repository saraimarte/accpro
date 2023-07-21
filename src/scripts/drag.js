import dragula from dragula

/*
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
      // check if the target container is dragparent or dragparent2
      var containerClass = target.id;
      // add the new class to the dropped element
      el.classList.add(containerClass);
    })
  }


*/





function init(){
  var dropcontainers = [
    document.querySelector("#dragparent"),
    document.querySelector("#box1"), 
    document.querySelector("#box2")
  ];
  var scrollable = true;

  var listener = function(e) {
      if (! scrollable) {
          e.preventDefault();
      }
  }

  dragula([dropcontainers], {
    direction: 'horizontal'
}).on('drag', function(el, source) {
    scrollable = false;
    el.classList.remove("box1", "box2", "dragparent");
}).on('drop', function(el, target, source) {
    scrollable = true;
     // check if the target container is dragparent or dragparent2
     var containerClass = target.id;
     // add the new class to the dropped element
     el.classList.add(containerClass);
});


document.addEventListener('touchmove', listener, { passive:false });

}

window.onload = function (){
  init();
  console.log("THE DRAG IS WORKINGGG");
}
