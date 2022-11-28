const LoginPage = require('../../POM/Facebook/LoginPage');
const SignUpPage = require('../../POM/Facebook/SignUpPage');
const Commands = require('../../POM/Commands');
const Dates = require('../../Utils/Dates');
const { expect } = require('chai');
const { it } = require('mocha');

describe('SignUp Test Suite', () => {
  it('Verify current date is displayed on SignUp form', async () => {
    const loginPage = new LoginPage();
    const signUpPage = new SignUpPage();

    await browser.url('https://www.facebook.com');
    await loginPage.clickNewAccountButton();
    await browser.pause(7000);

    const returnedMonth = await signUpPage.getMonth();
    const expectedMonth = now.month() + 1;
    expect(returnedMonth, 'month Selector is NOT as expected').to.equal(
      expectedMonth
    );

    console.log(
      `returnedMonth is ${returnedMonth}, expectedMonth is ${expectedMonth}.`
    );
  });
});
