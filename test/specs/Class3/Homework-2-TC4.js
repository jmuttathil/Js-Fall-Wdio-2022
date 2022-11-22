/**
 * TC-4: https://www.darksky.net/
 *
 * 1. Launch Darksky
 * 2. Verify feelsLikeTempValue is in between lowTempValue and highTempValue
 */

const { expect } = require('chai');
const { it } = require('mocha');

describe('Homework-2 : TC-4', () => {
  it('Homework-2 : TC-4', async () => {
    // 1. Launch Darksky
    await browser.url('https://www.darksky.net/');
    await browser.pause(3000);

    // Verify feelsLikeTempValue is in between lowTempValue and highTempValue

    // feelsLike
    const feelsLikeTempWE = await $('span[class=feels-like-text]');
    var feelsLikeTempValue = await feelsLikeTempWE.getText();
    feelsLikeTempValue = feelsLikeTempValue.substring(
      0,
      feelsLikeTempValue.length - 1
    );
    feelsLikeTempValue = parseInt(feelsLikeTempValue);

    // lowTemp
    const lowTempWE = await $('span[class=low-temp-text]');
    var lowTempValue = await lowTempWE.getText();
    lowTempValue = lowTempValue.substring(0, lowTempValue.length - 1);
    lowTempValue = parseInt(lowTempValue);

    // highTemp
    const highTempWE = await $('span[class=high-temp-text]');
    var highTempValue = await highTempWE.getText();
    highTempValue = highTempValue.substring(0, highTempValue.length - 1);
    highTempValue = parseInt(highTempValue);

    var feelsLikeTempInRange;
    if (
      feelsLikeTempValue > lowTempValue &&
      feelsLikeTempValue < highTempValue
    ) {
      feelsLikeTempInRange = true;
    } else {
      feelsLikeTempInRange = false;
    }

    expect(feelsLikeTempInRange, 'Feels Like Temp is OUT OF RANGE').to.equal(
      true
    );
  });
});
