const BasePage = require('./BasePage');

class CapCutPage extends BasePage {
  constructor(page) {
    super(page);
    // Selectors
    this.textMenu = '#menu-text';
    this.autoCaptionsButton = '#btn-auto-captions';
    this.backgroundRemovalButton = '#btn-auto-cutout';
    this.ttsButton = '#btn-text-to-speech';
    this.timeline = '.video-timeline';
  }

  async generateAutoCaptions() {
    await this.clickElement(this.textMenu);
    await this.clickElement(this.autoCaptionsButton);
  }

  async applyBackgroundRemoval() {
    await this.clickElement(this.backgroundRemovalButton);
  }

  async generateTextToSpeech(voiceName) {
    await this.clickElement(this.ttsButton);
    await this.clickElement(`text=${voiceName}`); // Click the specific voice
  }
}

module.exports = CapCutPage;