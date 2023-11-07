var table = document.getElementById("historyTable").getElementsByTagName('tbody')[0];

function generateReverseTable(table, data) {
    for (let element of data) {
        let row = table.insertRow(0);
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
    // document.getElementById("numSongs").textContent = ("Number of songs: " + count);
}

function clearHistory() {
    localStorage.setItem('historyList', JSON.stringify([]));
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}

window.onload = function() {
    // Check if historyList exists and has content
    let storedHistoryList = JSON.parse(localStorage.getItem('historyList'));
    if (storedHistoryList && storedHistoryList.length > 0) {
        generateReverseTable(table, storedHistoryList);
    }
};