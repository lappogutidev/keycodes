window.onload = function() {
    var keycodeParagraph = document.getElementById("keycodeParagraph");
    var keycodeDescription = document.getElementById("keycodeDescription");
    var keycodeLog = document.getElementById("keycodeLog");
}

document.addEventListener("keydown", function(event) {
  keycodeUpdate(event);
});

var keycodeUpdate = function() {
    keycodeParagraph.innerHTML = event.which;
    keycodeDescription.innerHTML = event.key;
    var logRow = keycodeLog.insertRow(keycodeLog.rows.length-1);
    var logCell = logRow.insertCell(0);
    logCell.innerHTML = event.which+" : "+event.key;
    if (keycodeLog.rows.length > 20) {
        keycodeLog.deleteRow(0);
    }
}
