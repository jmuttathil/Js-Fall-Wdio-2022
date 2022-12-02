/**
 * TC-3: https://www.facebook.com/
 * Facebook: Verify user gets error when submit empty login on messenger screen
 *
 * 1. Click Messenger
 * 2. Verify "Keep me signed in" is NOT selected
 * 3. Click "Log in" button
 * 4. Verify link (Find your account and log in.) is displayed
 * 5. Verify "Continue" button is enabled
 * 6. Verify "Keep me signed in" is NOT selected
 * 7. Click "Keep me signed in" checkbox
 * 8. Verify "Keep me signed in" is selected
 *
 */ 

const { expect } = require('chai');
const { it } = require('mocha');

describe('Homework-2 : TC-3', () => {
  it('Homework-2 : TC-3', async () => {
    // 0. Launch facebook.com
    await browser.url('/');

    // 1. Click Messenger
    const messengerLink = await $('=Messenger');
    messengerLink.click();
    await browser.pause(5000);

    // 2. Verify "Keep me signed in" is NOT selected
    const keepMeSignedInBox = await $('input[name=persistent]');
    const keepMeSignedInBoxStatus = await keepMeSignedInBox.isSelected();
    expect(keepMeSignedInBoxStatus, '"Keep me signed in" IS selected').to.equal(
      false
    );

    // 3. Click "Log in" button
    const messengerLogIn = await $('#loginbutton');
    messengerLogIn.click();
    await browser.pause(5000);

    //4. Verify link (Find your account and log in.) is displayed
    const findYourAccountLink = await $('=Find your account and log in.');
    const findYourAccountLinkStatus = await findYourAccountLink.isDisplayed();
    expect(
      findYourAccountLinkStatus,
      '(Find your account and log in.) link is NOT displayed'
    ).to.equal(true);

    // 5. Verify "Continue" button is enabled
    const continueButton = await $('#loginbutton');
    const continueButtonStatus = await continueButton.isEnabled();
    expect(continueButtonStatus, 'Continue button is NOT enabled.').to.equal(
      true
    );

    // 6. Verify "Keep me signed in" is NOT selected
    const keepMeSignedInBox2 = await $('input[name=persistent]');
    const keepMeSignedInBoxStatus2 = await keepMeSignedInBox2.isSelected();
    expect(
      keepMeSignedInBoxStatus2,
      '"Keep me signed in" IS selected'
    ).to.equal(false);

    // 7. Click "Keep me signed in" checkbox
    const keepMeSignedInLabel = await $('label=Keep me signed in');
    keepMeSignedInLabel.click();
    await browser.pause(5000);

    // 8. Verify "Keep me signed in" is selected
    const keepMeSignedInBox3 = await $('input[name=persistent]');
    const keepMeSignedInBoxStatus3 = await keepMeSignedInBox3.isSelected();
    expect(
      keepMeSignedInBoxStatus3,
      '"Keep me signed in" SHOULD BE selected'
    ).to.equal(true);
  });
});
