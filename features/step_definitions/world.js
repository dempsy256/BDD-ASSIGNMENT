// features/support/world.js
const { setWorldConstructor, World } = require('@cucumber/cucumber');

class CustomWorld extends World {
  constructor(options) {
    // Pass options back to the base World class
    super(options);

   
    // Figma State
    this.selectedLayers = [];
    this.currentCanvas = null;

    // Spotify State
    this.activePlaylist = null;
    this.playbackState = 'stopped';
    this.isSmartShuffleActive = false;
    this.queue = [];

    // CapCut State
    this.timelineClips = [];
    this.activeTool = null;
    this.generatedCaptions = [];

    // General App/Browser State (Useful if using Playwright/Puppeteer)
    this.browser = null;
    this.page = null;
    this.currentUser = null;
  }

  // You can also define helper methods here that can be accessed in your steps
  // Example: this.playTrack() in your step definitions
  playTrack(trackId) {
    this.playbackState = 'playing';
    this.queue.push(trackId);
  }

  resetState() {
    this.selectedLayers = [];
    this.playbackState = 'stopped';
    this.timelineClips = [];
  }
}

// Tell Cucumber to use this custom class as the World
setWorldConstructor(CustomWorld);