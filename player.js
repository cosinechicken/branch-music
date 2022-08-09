var loop = false;

function randomize() {
    // Randomizes song being played
    let index = Math.floor(Math.random() * catInfoList.length);
    // find the index in infolist
    for (let i = 0; i < infoList.length; i++) {
        if (infoList[i][0] === catInfoList[index][0]) {
            play(i);
            return;
        }
    }
}
function toggleAutoplay() {
    // Toggle autoplay button
    loop = !loop;
    console.log("AutoPlay toggled");
    if (loop) {
        document.getElementById("audio").loop = true;
    } else {
        document.getElementById("audio").loop = false;
    }
    
}
function audioEnded() {
    // Run this function when the audio ends
    if (!loop) {
        document.getElementById("audio2").play();
        randomize();
    }
    
    
}
function playByID() {
    let id = document.getElementById("idInput").value;
    // Run this function to play a specific song based on id
    for (let i = 0; i < infoList.length; i++) {
        if (id === infoList[i][0]) {
            document.getElementById("idInput").value = "";
            play(i);
            console.log("Now playing: " + id);
            return;
        }
    }
}
function play(index) {
    // We found a match
    let srcString = "Music/" + infoList[index][1] + ".mp3";
    console.log(srcString);
    document.getElementById("audio").src = srcString;
    document.getElementById("current").textContent = "Playing: " + infoList[index][1]
        + " (ID: " + infoList[index][0] + ")";
    document.getElementById("volume").textContent = "Volume: " + infoList[index][3];
    document.getElementById("audio2").src = "Music/" + infoList[0][1] + ".mp3";
    document.getElementById("audio2").pause();
    console.log(document.getElementById("audio2")); 
    // Update the category
    document.getElementById("categorySelect").value = categories[infoList[index][1]];
    changeCategory();
    document.getElementById("audio").load();
    document.getElementById("audio").play();
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