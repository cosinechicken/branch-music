
var table = document.getElementById("songTable").getElementsByTagName('tbody')[0];
console.log(table);
generateTable(table, infoList);

function generateTable(table, data) {
    for (let element of data) {
        console.log(element);
        let row = table.insertRow(-1);
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}
