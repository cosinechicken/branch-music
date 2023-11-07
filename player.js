var loop = false;
var curIndex = -1;

function randomize() {
    // Randomizes song being played
    let index = Math.floor(Math.random() * catInfoList.length);
    // find the index in infolist
    for (let i = 0; i < infoList.length; i++) {
        if (infoList[i][0] === catInfoList[index][0]) {
            curIndex = i;
            play();
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
        randomize();
    } else {
        play(curIndex);
    }
    
    
}
function playByID() {
    let id = document.getElementById("idInput").value;
    // Run this function to play a specific song based on id
    for (let i = 0; i < infoList.length; i++) {
        if (id === infoList[i][0]) {
            document.getElementById("idInput").value = "";
            curIndex = i;
            play();
            console.log("Now playing: " + id);
            return;
        }
    }
}

// Play the song indexed by curIndex
function play() {
    // We found a match
    let srcString = "Music/" + infoList[curIndex][1] + ".mp4";
    console.log(srcString);
    document.getElementById("audio").src = srcString;
    document.getElementById("current").textContent = "Playing: " + infoList[curIndex][1]
        + " (ID: " + infoList[curIndex][0] + ")";
    document.getElementById("volume").textContent = "Volume: " + infoList[curIndex][3];
    // Update the category
    document.getElementById("categorySelect").value = categories[infoList[curIndex][1]];
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