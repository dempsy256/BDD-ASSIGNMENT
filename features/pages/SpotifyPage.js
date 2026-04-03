const BasePage = require('./BasePage');

class SpotifyPage extends BasePage {
  constructor(page) {
    super(page);
    // Selectors
    this.shuffleButton = 'button[data-testid="control-button-shuffle"]';
    this.skipButton = 'button[data-testid="control-button-skip-forward"]';
    this.djCard = 'div[data-testid="ai-dj-card"]';
    this.downloadToggle = 'button[aria-checked]'; // Assuming it's a toggle switch
  }

  async activateSmartShuffle() {
    // Double click to activate smart shuffle
    await this.clickElement(this.shuffleButton);
    await this.clickElement(this.shuffleButton);
  }

  async startAIDJ() {
    await this.clickElement(this.djCard);
  }

  async skipTrack() {
    await this.clickElement(this.skipButton);
  }
}

module.exports = SpotifyPage;