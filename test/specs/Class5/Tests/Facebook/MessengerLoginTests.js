const LoginPage = require('../../POM/Facebook/LoginPage');
const MessengerLoginPage = require('../../POM/Facebook/MessengerLoginPage.js');
const { expect } = require('chai');
const { it } = require('mocha');

describe('Messenger Login Test Suite', () => {
  it.only('Verify user gets error when submit empty login', async () => {
    const loginPage = new LoginPage();
    const messengerLoginPage = new MessengerLoginPage();

    /**
     * 1. Click Messenger
     * 2. Verify "Keep me signed in" is NOT selected
     * 3. Click "Log in" button
     * 4. Verify link (Find your account and log in.) is displayed
     * 5. Verify "Continue" button is enabled
     * 6. Verify "Keep me signed in" is NOT selected
     * 7. Click "Keep me signed in" checkbox
     * 8. Verify "Keep me signed in" is selected
     */

    // 0. Launch facebook.com
    await browser.url('https://www.facebook.com');

    // 1. Click Messenger
    await loginPage.clickMessengerLink();
    await browser.pause(3000);

    // 2. Verify "Keep me signed in" is NOT selected
    expect(
      await messengerLoginPage.isKeepMeSignedInSelected(),
      'Keep Me Signed In should NOT be selected.'
    ).to.be.false;

    // 3. Click "Log in" button
    await messengerLoginPage.clickMessengerLogInButton();
    await browser.pause(3000);

    // 4. Verify link (Find your account and log in.) is displayed
    expect(
      await messengerLoginPage.isFindYourAccountLinkDisplayed(),
      '"Find your account" Link SHOULD BE Displayed.'
    ).to.be.true;

    // 5. Verify "Continue" button is enabled
    expect(
      await messengerLoginPage.isContinueButtonEnabled(),
      'Continue Button SHOULD BE Enabled.'
    ).to.be.true;

    // 6. Verify "Keep me signed in" is NOT selected
    expect(
      await messengerLoginPage.isKeepMeSignedInSelected(),
      'Keep Me Signed In should NOT be selected.'
    ).to.be.false;
    // 7. Click "Keep me signed in" checkbox
    await messengerLoginPage.clickKeepMeSignedIn();
    await browser.pause(3000);

    // 8. Verify "Keep me signed in" is selected
    expect(
      await messengerLoginPage.isKeepMeSignedInSelected(),
      'Keep Me Signed In SHOULD BE selected.'
    ).to.be.true;
  });
});
