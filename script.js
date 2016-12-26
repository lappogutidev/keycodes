var keycodeParagraph;

window.onload = function() {
    keycodeParagraph = document.getElementById("keycodeParagraph");
    var keycodeDescription = document.getElementById("keycodeDescription");
    var keycodeLog = document.getElementById("keycodeLog");
}

document.addEventListener("keydown", function(event) {
  keycodeUpdate(event);
});

var keycodeUpdate = function() {
    keycodeParagraph.innerHTML = event.which;
    keycodeDescription.innerHTML = event.key;
    if (keycodeDescription.innerHTML === " ") {
        keycodeDescription.innerHTML = "<br />";
    };
    var logRow = keycodeLog.insertRow(keycodeLog.rows.length);
    var logCell1 = logRow.insertCell(0);
    var logCell2 = logRow.insertCell(1);
    logCell1.innerHTML = event.which;
    logCell2.innerHTML = event.key;
    if (keycodeLog.rows.length > 20) {
        keycodeLog.deleteRow(0);
    };
}
