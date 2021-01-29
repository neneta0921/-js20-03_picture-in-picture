document.addEventListener('DOMContentLoaded', () => {
  const main = new Main();

  // On Load
  main.selectMediaStream();
});

class Main {
  constructor() {
    this.videoElement = document.querySelector('#video');
    this._init();
  }

  _init() {
    this._addEvent();
  }

  // Prompt to select media stream, pass to video element, then play
  async selectMediaStream() {
    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      this.videoElement.srcObject = mediaStream;
      this.videoElement.onloadedmetadata = () => {
        this.videoElement.play();
      };
    } catch (error) {
      // Catch Error Here
      console.error('Error: ', error);
    }
  }

  _addEvent() {
    const button = document.querySelector('#button');
    button.addEventListener('click', async () => {
      // Disable Button
      button.disabled = true;
      // Start Picture in Picture
      await this.videoElement.requestPictureInPicture();
      // Reset Button
      button.disabled = false;
    });
  }
}
