const videoElem = document.getElementById("video");
const startElem = document.getElementById("button");

// Options for getDisplayMedia()

var displayMediaOptions = {
    video: {
        cursor: "always"
    },
    audio: false
};

// Set event listeners for the start and stop buttons
startElem.addEventListener("click", function(evt) {
    startCapture();
}, false);


async function startCapture() {

    try {
        videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
        videoElem.removeAttribute("hidden");
        videoElem.requestPictureInPicture();

    } catch(err) {
        console.error("Error: " + err);
    }
}