window.onload = function() {
    var keycodeParagraph = document.getElementById("keycodeParagraph");
    var keycodeDescription = document.getElementById("keycodeDescription");
}

document.addEventListener("keydown", function(event) {
  keycodeUpdate(event);
});

var keycodeUpdate = function() {
    keycodeParagraph.innerHTML = event.which;
    keycodeDescription.innerHTML = event.key;
}
