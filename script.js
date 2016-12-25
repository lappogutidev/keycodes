window.onload = function() {
    var keycodeParagraph = document.getElementById("keycodeParagraph");
    var keycodeDescription = document.getElementById("keycodeDescription");
    var keycodeLog = document.getElementById("keycodeLog");
}

document.addEventListener("keydown", function(event) {
  keycodeUpdate(event);
  console.log("Output = [", event.which, ":", event.key, "]");
});

var keycodeUpdate = function() {
    keycodeParagraph.innerHTML = event.which;
    keycodeDescription.innerHTML = event.key;
    var logRow = keycodeLog.insertRow(keycodeLog.rows.length-1);
    var logCell = logRow.insertCell(0);
    logCell.innerHTML = "code : "+event.which+"key : "+event.key;
}
