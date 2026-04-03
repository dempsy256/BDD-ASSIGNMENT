const BasePage = require('./BasePage');

class FigmaPage extends BasePage {
  constructor(page) {
    super(page);
    // Selectors
    this.canvas = '#figma-canvas';
    this.propertiesPanel = '.right-sidebar';
    this.gapInput = 'input[aria-label="Horizontal gap"]';
    this.aiRenameButton = 'button[aria-label="Rename layers automatically"]';
  }

  async selectMultipleLayers(layerNames) {
    // Logic to select multiple layers on the canvas
    for (const name of layerNames) {
      await this.clickElement(`[data-layer-name="${name}"]`);
    }
  }

  async applyAutoLayout() {
    // Playwright command to simulate pressing Shift + A
    await this.page.keyboard.press('Shift+A');
  }

  async changeAutoLayoutGap(newGap) {
    await this.typeText(this.gapInput, newGap.toString());
    await this.page.keyboard.press('Enter');
  }
}

module.exports = FigmaPage;