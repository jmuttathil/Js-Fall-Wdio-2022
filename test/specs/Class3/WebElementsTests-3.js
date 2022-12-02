const { expect } = require('chai');
const { it } = require('mocha');

describe('WebElements Test cases', () => {
  it('Verify error is displayed for incorrect login credentials', async () => {
    /**
     * Steps:
     * 1. Launch facebook.com
     * 2. type '#$%^&*' as username
     * 3. type 'abcd@1234' as password
     * 4. click login button
     * 5. Verify the error is displayed
     */

    // 1. Launch facebook.com
    await browser.url('/');

    // 2. type '#$%^&*' as username
    const loginEmailInputBox = await $('#email');
    loginEmailInputBox.setValue('#$%^&*');
    // await browser.pause(5000);

    // 3. type 'abcd@1234' as password
    const loginPwdInputBox = await $('#pass');
    loginPwdInputBox.setValue('abcd@1234');

    await browser.pause(5000);

    // 4. click login button
    const loginButton = await $('<button>');
    loginButton.click();

    await browser.pause(5000);

    // 5. Verify the error is displayed
    const loginErrorLink = await $('*=Find');
    const isLoginErrorDisplayed = await loginErrorLink.isDisplayed();
    expect(isLoginErrorDisplayed, 'Login error is NOT displayed').to.be.true;
  });

  it('Verify default state of login fields', async () => {
    /**
     * Steps:
     * 1. Launch facebook.com
     * 2. Verify loginEmail has default text as "Email address or phone number"
     * 3. Verify loginPassword has default text as "Password"
     * 4. Verify loginButton has default text as "Log in"
     */

    // 1. Launch facebook.com
    await browser.url('/');

    // 2. Verify loginEmail has default text as "Email address or phone number"
    expectedLoginEmailFieldCopy = 'Email address or phone number';
    const loginEmailField = await $('input[data-testid*=al_e]');
    /*
            value of placeholder attribute is displayed in the field

            placeholder-value === expectedLoginEmailFieldCopy
        */
    const actualLoginEmailFieldCopy = await loginEmailField.getAttribute(
      'placeholder'
    );
    expect(
      actualLoginEmailFieldCopy,
      'Login Email field copy is NOT as expected'
    ).to.equal(expectedLoginEmailFieldCopy);

    // 3. Verify loginPassword has default text as "Password"
    expectedLoginPwdFieldCopy = 'Password';
    const loginPasswordField = await $('input[data-testid=royal_pass]');
    const actualLoginPwdFieldCopy = await loginPasswordField.getAttribute(
      'placeholder'
    );

    expect(
      actualLoginPwdFieldCopy,
      'Login Password field copy is NOT as expected'
    ).to.equal(expectedLoginPwdFieldCopy);

    // 4. Verify loginButton has default text as "Log in"
    // textValue === Log in
    expectedLoginButtonCopy = 'Log in';
    const loginButton = await $('<button>');
    const actualLoginButtonCopy = await loginButton.getText();

    expect(
      actualLoginButtonCopy,
      'Login Button copy is NOT as expected'
    ).to.equal(expectedLoginButtonCopy);
  });

  it('using simple-xpath ', async () => {
    /**
     * Steps:
     * 1. Launch facebook.com
     * 2. Enter 'abcd@gmail.com' as login email
     */

    // 1. Launch facebook.com
    await browser.url('/');

    // 2. Enter 'abcd@gmail.com' as login email
    const loginEmail = await $(
      '//input[@aria-label="Email address or phone number"]'
    );
    await loginEmail.setValue('abcd@gmail.com');

    await browser.pause(10000);
  });

  it.only('Complete the signup form', async () => {
    /**
     * Steps:
     * 1. Launch
     * 2. Click Create New Account
     * 3. Enter data
     */

    // 1. Launch
    await browser.url('/');

    // 2. Click Create New Account
    const createNewAccountButton = await $('=Create New Account');
    createNewAccountButton.click();

    await browser.pause(7000);

    // Enter data
    await $('//input[@aria-label="First name"]').setValue('FIRST');

    await $('//input[contains(@name , "last")]').setValue('LAST');

    await $('//input[@name="reg_email__"]').setValue('9898989898');

    await $('//input[contains(@id , "word_")]').setValue('abcd@1234');

    await $('//select[@title="Day"]').selectByVisibleText('20');

    await $('//select[contains(@name , "ay_m")]').selectByVisibleText('Mar');

    await $('//select[contains(@id , "ear")]').selectByVisibleText('1990');

    await $('//label[contains(text() , "Ma")]').click();

    await browser.pause(10000);
  });
});
