const { expect } = require("chai");
const { it } = require("mocha");

describe('WebElements Test cases', () => {

    it('Testcase using id-locator and other attribute', async () => {

        /**
         * 
         * 1. Launch facebook.com
         * 2. type 'deepak@gmail.com as username
         * 3. type 'abcd@1234' as password
         * 4. click login button
         */

        // 1. Launch facebook.com
        await browser.url('/');

        // 2. type 'deepak@gmail.com' as username
        const loginEmailInputBox = await $('#email');
        loginEmailInputBox.setValue('deepak@gmail.com');
        await browser.pause(10000);

        // 3. type 'abcd@1234' as password
        const loginPwdInputBox = await $('#pass');
        loginPwdInputBox.setValue('abcd@1234');

        await browser.pause(10000);

        // 4. click login button
        const loginButton = await $('button[name=login]');
        loginButton.click();

        await browser.pause(10000);

    })

    it('Click Create new Account button - using linkText', async () => {
        
        /**
         * 1. Launch facebook.com
         * 2. Click Create New Account button
         */

        // 1. Launch facebook.com
        await browser.url('/');

        // 2. Click Create New Account button
        const createNewAccountButton = await $('=Create New Account');
        createNewAccountButton.click();

         await browser.pause(7000);


    });

    it('Click Create new Account button - using partial Link-text', async () => {
        
        /**
         * 1. Launch facebook.com
         * 2. Click Create New Account button
         */

        // 1. Launch facebook.com
        await browser.url('/');

        // 2. Click Create New Account button
        const createNewAccountButton = await $('*=te N');
        createNewAccountButton.click();

         await browser.pause(7000);

    });

    it('Verify login input fields and button are enabled by default', async () => {

        /**
         * 
         * 1. Launch facebook.com
         * 2. Verify login email input field is enabled
         * 3. Verify login password input field is enabled
         * 4. Verify login button is enabled
         * 
         */

        // 1. Launch facebook.com
        await browser.url('/');

        // 2. Verify login email input field is enabled
        const loginEmailInputBox = await $('input[data-testid=royal_email]');
        const isLoginEmailEnabled = await loginEmailInputBox.isEnabled();
        expect(isLoginEmailEnabled, 'Login email input box is NOT enabled').to.be.true;

        await browser.pause(5000);

        // 3. type 'abcd@1234' as password
        const loginPwdInputBox = await $('input[placeholder=Password]');
        const isLoginPwdEnabled = await loginPwdInputBox.isEnabled();
        expect(isLoginPwdEnabled, 'Login password input box is NOT enabled').to.be.true;

        await browser.pause(5000);

        // 4. click login button
        const loginButton = await $('button[name=login]');
        const isLoginButtonEnabled = await loginButton.isEnabled();
        expect(isLoginButtonEnabled, 'Login button is NOT enabled').to.be.true;

        await browser.pause(10000);

    })  

    // Practice
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
        const loginButton = await $('button[name=login]');
        loginButton.click();

        await browser.pause(5000);

        // 5. Verify the error is displayed
        const loginErrorLink = await $('*=Find');
        const isLoginErrorDisplayed = await loginErrorLink.isDisplayed();
        expect(isLoginErrorDisplayed, 'Login error is NOT displayed').to.be.true;
    })

    // To be complete as homework
    it('Verify default no gender button is selected on Sign up page', async () => {
        /**
         * Steps:
         * 1. Launch facebook.com
         * 2. Click Create New Account
         * 3. Verify female-gender button is not selected
         * 4. Verify male-gender button is not selected
         * 5. Verify custom-gender button is not selected
         * 6. If female gender is NOT selected, then click on female gender radio button
         * 7. Verify female-gender button is selected
         */

        // 1. Launch facebook.com
        await browser.url('/');

        // 2. Click Create New Account button
        const createNewAccountButton = await $('=Create New Account');
        createNewAccountButton.click();

        await browser.pause(7000);

        // 3. Verify female-gender button is not selected
        const femaleRadioButton = await $('input[value="1"]');
        const isFemaleGenderSelected = await femaleRadioButton.isSelected();
        expect(isFemaleGenderSelected, 'Female gender is already selected').to.be.false;

    });

    // Practice - 2
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
        await loginEmailInputBox.setValue('#$%^&*');
        // await browser.pause(5000);

        // 3. type 'abcd@1234' as password
        const loginPwdInputBox = await $('#pass');
        await loginPwdInputBox.setValue('abcd@1234');

        await browser.pause(5000);

        // 4. click login button
        const loginButton = await $('button[name=login]');
        await loginButton.click();

        await browser.pause(5000);

        // 5. Verify the error is displayed
        const loginErrorLink = await $('*=Find');
        const isLoginErrorLinkEnabled = await loginErrorLink.isEnabled();
        expect(isLoginErrorLinkEnabled, 'Login error link is NOT enabled').to.be.true;

        const isLoginErrorLinkDisplayed = await loginErrorLink.isDisplayed();
        expect(isLoginErrorLinkDisplayed, 'Login error link is NOT displayed').to.be.true;


        const loginErrorText = await $('div*=The email address or mobile number');
        const isLoginErrorTextDisplayed = await loginErrorText.isDisplayed();
        expect(isLoginErrorTextDisplayed, 'Login error text is NOT displayed').to.be.true;
    })

})