const LoginPage = require('../../POM/Facebook/LoginPage');
const LoginErrorPage = require('../../POM/Facebook/LoginErrorPage');
const { expect } = require('chai');
const { it } = require('mocha');

describe('Login Test Suite', () => {
  it.only('Verify user gets error for invalid credentials', async () => {
    const loginPage = new LoginPage();
    const loginErrorPage = new LoginErrorPage();

    /**
     * 1. Launch facebook.com
     * 2. Enter invalid credentials (@#$%^& / abcd@1234)
     * 3. Verify error is displayed -> The email address or mobile number you entered isn't connected to an account.
     */
 
    // 1. Launch facebook.com
    await browser.url('https://www.facebook.com');

    // 2. Enter invalid credentials (@#$%^& / abcd@1234)
    await loginPage.enterLoginEmail('@#$%^&');
    await loginPage.enterLoginPassword('abcd@1234');
    await loginPage.clickLoginInButton();
    await browser.pause(2000);
    // 3. Verify error is displayed -> The email address or mobile number you entered isn't connected to an account.
    expect(
      await loginErrorPage.isLoginErrorDisplayed(),
      'Login error message is NOT displayed'
    ).to.be.true;
  });
});
