var loop = false;

function randomize() {
    // Randomizes song being played
    console.log(catInfoList.length)
    let id = Math.floor(Math.random() * catInfoList.length);
    // Find the string of the title
    let srcString = "Music/" + catInfoList[id][1] + ".mp4";
    console.log(srcString);
    document.getElementById("audio").src = srcString;
    document.getElementById("current").textContent = "Currently Playing: " + catInfoList[id][1] 
        + " (ID: " + catInfoList[id][0] + ")";
    document.getElementById("audio").play();
}
function toggleAutoplay() {
    // Toggle autoplay button
    loop = !loop;
    console.log("AutoPlay toggled");
}
function audioEnded() {
    // Run this function when the audio ends
    if (!loop) {
        randomize();
    }
    document.getElementById("audio").play();
}
function playByID() {
    let id = document.getElementById("idInput").value;
    document.getElementById("idInput").value = "";
    console.log("Now playing: " + id);
    // Run this function to play a specific song based on id
    for (let i = 0; i < infoList.length; i++) {
        if (id === infoList[i][0]) {
            // We found a match
            let srcString = "Music/" + infoList[i][1] + ".mp4";
            console.log(srcString);
            document.getElementById("audio").src = srcString;
            document.getElementById("current").textContent = "Currently Playing: " + infoList[i][1] 
        + " (ID: " + infoList[i][0] + ")";
            document.getElementById("audio").play();
            // Update the category
            document.getElementById("categorySelect").value = categories[infoList[i][1]];
            changeCategory();
            return;
        }
    }
    document.getElementById("current").textContent = "Currently Playing: undefined"
    document.getElementById("audio").src = "";
}
function changeCategory() {
    // Called when category select is changed, updates the list of songs which can be played
    var category = document.getElementById("categorySelect").value;
    catInfoList = []
    for (const [key, value] of Object.entries(dict)) {
        // Default to category
        if (categories[value] == category) {
          catInfoList.push([key, value, categories[value]]);
        }
    }  
}