class Commands {
  /**  
    $
    setValue
    getValue
    click
    getText
    getAttribute
    isDisplayed
    isEnabled
    isSelected
    selectByVisibleText
    selectByAttribute
    selectByIndex
 */

  async findWebElement(locator) {
    return await $(locator);
  }

  async typeInWebElement(locator, dataToEnter) {
    await $(locator).setValue(dataToEnter);
  }

  async getValueOfWebElement(locator) {
    return await $(locator).getValue();
  }

  async clickWebElement(locator) {
    await $(locator).click();
  }

  async getTextOfWebElement(locator) {
    return await $(locator).getText();
  }

  async getAttributeWebElement(locator, attrName) {
    return await $(locator).getAttribute(attrName);
  }

  async getIsDisplayedOfWebElement(locator) {
    return await $(locator).isDisplayed();
  }

  async getIsEnabledOfWebElement(locator) {
    return await $(locator).isEnabled();
  }

  async getIsSelectedOfWebElement(locator) {
    return await $(locator).isSelected();
  }

  async selectByVisibleTextOfWebElement(locator, visibleText) {
    return await $(locator).selectByVisibleText(visibleText);
  }

  async selectByAttributeOfWebElement(locator, attrName) {
    return await $(locator).selectByAttribute(attrName);
  }

  async selectByIndexOfWebElement(locator, index) {
    return await $(locator).selectByIndex(index);
  }
}
module.exports = Commands;
