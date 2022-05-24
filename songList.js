
var table = document.getElementById("songTable").getElementsByTagName('tbody')[0];
console.log(table);
generateTable(table, infoList);

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
    document.getElementById("numSongs").textContent = ("Number of songs: " + count);
}
