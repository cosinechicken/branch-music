var historyList = []
var table = document.getElementById("historyTable").getElementsByTagName('tbody')[0];
generateTable(table, historyList);

function generateTable(table, data) {
    count = 0
    for (let element of data) {
        count += 1
        console.log(element);
        let row = table.insertRow(-1);
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
    // document.getElementById("numSongs").textContent = ("Number of songs: " + count);
}
