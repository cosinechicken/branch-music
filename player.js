var autoPlay = false;

function randomize() {
    // Randomizes song being played
    let id = Math.floor(Math.random() * idPair.length);
    // Find the string of the title
    let srcString = "Music/" + idPair[id][1] + ".mp4";
    console.log(srcString);
    document.getElementById("audio").src = srcString;
    document.getElementById("current").textContent = "Currently Playing: " + idPair[id][1] 
        + " (ID: " + idPair[id][0] + ")";
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