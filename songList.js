
var table = document.getElementById("songTable");
console.log(table);
generateTable(table, idPair);

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow(-1);
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}
