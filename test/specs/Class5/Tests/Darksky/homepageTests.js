const Homepage = require('../../POM/Darksky/Homepage');
const { expect } = require('chai');
const { it } = require('mocha');

describe('Homepage Test Suite', () => {
  it('Verify feelsLikeTempValue is in between lowTempValue and highTempValue', async () => {
    const homepage = new Homepage();
    /**
     * 1. Launch https://www.darksky.net/
     * 2. Verify feelsLikeTempValue is in between lowTempValue and highTempValue
     */

    // 1. Launch darksky.net
    await browser.url('https://www.darksky.net/');

    // 2. Verify feelsLikeTempValue is in between lowTempValue and highTempValue
    const feelsLikeTempValue = await homepage.getFeelsLikeTemp();
    const lowTempValue = await homepage.getLowTemp();
    const highTempValue = await homepage.getHighTemp();

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
