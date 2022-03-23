var autoPlay = false;

function randomize() {
    // Randomizes song being played
    console.log(idPair.length)
    let id = Math.floor(Math.random() * idPair.length);
    // Find the string of the title
    let srcString = "Music/" + idPair[id][1] + ".mp4";
    console.log(srcString);
    document.getElementById("audio").src = srcString;
    document.getElementById("current").textContent = "Currently Playing: " + idPair[id][1] 
        + " (ID: " + idPair[id][0] + ")";
    document.getElementById("audio").play();
}
function toggleAutoplay() {
    // Toggle autoplay button
    autoPlay = !autoPlay;
    if (autoPlay) {
        document.getElementById("autoplayText").textContent = "Autoplay: On"
    } else {
        document.getElementById("autoplayText").textContent = "Autoplay: Off"
    }
}
function audioEnded() {
    // Run this function when the audio ends
    if (autoPlay) {
        randomize();
        document.getElementById("audio").play();
    }
}
function playByID() {
    let id = document.getElementById("idInput").value;
    document.getElementById("idInput").value = "";
    console.log("Now playing: " + id);
    // Run this function to play a specific song based on id
    for (let i = 0; i < idPair.length; i++) {
        if (id === idPair[i][0]) {
            // We found a match
            let srcString = "Music/" + idPair[i][1] + ".mp4";
            console.log(srcString);
            document.getElementById("audio").src = srcString;
            document.getElementById("current").textContent = "Currently Playing: " + idPair[i][1] 
        + " (ID: " + idPair[i][0] + ")";
            document.getElementById("audio").play();
            return;
        }
    }
    document.getElementById("current").textContent = "Currently Playing: undefined"
    document.getElementById("audio").src = "";
}