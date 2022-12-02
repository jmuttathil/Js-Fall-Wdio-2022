const Commands = require('../Commands');

class Homepage {
  commands = new Commands();

  // 1) LOCATORS
  feelsLikeTempWE = 'span[class=feels-like-text]';
  lowTempWE = 'span[class=low-temp-text]';
  highTempWE = 'span[class=high-temp-text]';

  // 2) FUNCTIONS
  async getFeelsLikeTemp() {
    var feelsLikeTempValue = await $(this.feelsLikeTempWE).getText();
    feelsLikeTempValue = feelsLikeTempValue.substring(
      0,
      feelsLikeTempValue.length - 1
    ); //remove degree symbol
    feelsLikeTempValue = parseInt(feelsLikeTempValue); //convert string to integer
    return feelsLikeTempValue;
  }

  async getLowTemp() {
    var lowTempValue = await $(this.lowTempWE).getText();
    lowTempValue = lowTempValue.substring(0, lowTempValue.length - 1); //remove degree symbol
    lowTempValue = parseInt(lowTempValue); //convert string to integer
    return lowTempValue;
  }

  async getHighTemp() {
    var highTempValue = await $(this.highTempWE).getText();
    highTempValue = highTempValue.substring(0, highTempValue.length - 1); //remove degree symbol
    highTempValue = parseInt(highTempValue); //convert string to integer
    return highTempValue;
  }
}
module.exports = Homepage;
