var keycodeParagraph;
var directionUp = true;
var maxLength = 20;
var rowInsert = (function() {
    if (directionUp){
        return 0;
    } else {
        return maxLength - 1;
    }
})();
var rowDelete = (maxLength - 1) - rowInsert;

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
    var logRow;
    if (rowInsert === (maxLength -1)) {
        logRow = keycodeLog.insertRow(this.keycodeLog.length);
    } else {
        logRow = keycodeLog.insertRow(rowInsert);
    }
    var logCell1 = logRow.insertCell(0);
    var logCell2 = logRow.insertCell(1);
    logCell1.innerHTML = event.which;
    logCell2.innerHTML = event.key;
    console.log(event.which + ", " + event.key);
    while (keycodeLog.rows.length > maxLength) {
        keycodeLog.deleteRow(rowDelete);
    }
}
