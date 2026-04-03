class BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async clickElement(selector) {
    await this.page.locator(selector).click();
  }

  async typeText(selector, text) {
    await this.page.locator(selector).fill(text);
  }

  async isVisible(selector) {
    return await this.page.locator(selector).isVisible();
  }
}

module.exports = BasePage;