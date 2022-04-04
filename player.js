var loop = false;

function randomize() {
    // Randomizes song being played
    console.log(infoList.length)
    let id = Math.floor(Math.random() * infoList.length);
    // Find the string of the title
    let srcString = "Music/" + infoList[id][1] + ".mp4";
    console.log(srcString);
    document.getElementById("audio").src = srcString;
    document.getElementById("current").textContent = "Currently Playing: " + infoList[id][1] 
        + " (ID: " + infoList[id][0] + ")";
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
            return;
        }
    }
    document.getElementById("current").textContent = "Currently Playing: undefined"
    document.getElementById("audio").src = "";
}
function changeCategory() {
    var category = document.getElementById("categorySelect").value;
}