var table = document.getElementById("historyTable").getElementsByTagName('tbody')[0];

function generateTable(table, data) {
    count = 0
    for (let element of data) {
        count += 1
        let row = table.insertRow(-1);
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
    // document.getElementById("numSongs").textContent = ("Number of songs: " + count);
}


window.onload = function() {
    // Check if historyList exists and has content
    let storedHistoryList = JSON.parse(localStorage.getItem('historyList'));
    if (storedHistoryList && storedHistoryList.length > 0) {
        generateTable(table, storedHistoryList);
    }
};