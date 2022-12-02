/**
 * Automate below testcase:
 *
 * Due date: Nov 21 (Mon)
 *
 * TC-2: https://www.facebook.com/
 * Facebook: Verify user gets error when submits empty login form
 *
 * Expected error msg -> The email address or mobile number you entered isn't connected to an account.
 */ 

const { expect } = require('chai');
const { it } = require('mocha');

describe('Homework-2 : TC-2', () => {
  it('Homework-2 : TC-2', async () => {
    // 1. Launch facebook.com
    await browser.url('/');

    // 2. Click Log In button
    const loginButton = await $('button[name=login]');
    loginButton.click();
    await browser.pause(5000);

    // 3. Verify Error Msg is as Expected
    const displayedErrorMsg = await $(
      '//div[contains(text() , "The email or mobile number you entered isn’t connected to an account.")]'
    );
    const errorMsgVisibility = await displayedErrorMsg.isDisplayed();
    expect(errorMsgVisibility, 'Error Message is NOT as expected').to.equal(
      true
    );
  });
});
 