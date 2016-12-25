window.onload = function() {
    var keycodeParagraph = document.getElementById("keycodeParagraph");
    console.log("test : ", keycodeParagraph.innerHTML);
}

document.addEventListener("keydown", function(event) {
  keycodeParagraph.innerHTML = event.which;
  console.log(event.which);
  console.log(typeof event.which === "number");
});

var keycodeUpdate = function(keycode) {
    keycodeParagraph.innerHTML = event.which;
    
}
