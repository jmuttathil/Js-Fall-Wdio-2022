const LoginPage = require('../../POM/Facebook/LoginPage');
const SignUpPage = require('../../POM/Facebook/SignUpPage');
const Dates = require('../../Utils/Dates');
const { expect } = require('chai');
const { it } = require('mocha');

describe('SignUp Test Suite', () => {
  it('Verify current date is displayed on SignUp form', async () => {
    const loginPage = new LoginPage();
    const signUpPage = new SignUpPage();
    const dates = new Dates();
    /**
     * 1. Launch facebook.com
     * 2. Click Create New Account button
     * 3. Verify current date is displayed in Date of birth dropdowns
     */

    // 1. Launch facebook.com
    await browser.url('https://www.facebook.com');

    // 2. Click Create New Account button
    await loginPage.clickNewAccountButton();
    await browser.pause(7000);

    // 3. Verify current date is displayed in Date of birth dropdowns
    // MONTH
    const returnedMonth = await signUpPage.getMonth();
    const expectedMonth = await dates.getCurrentMonth_M();
    expect(returnedMonth, 'month Selector is NOT as expected').to.equal(
      expectedMonth
    );

    // DAY
    const returnedDay = await signUpPage.getDay();
    const expectedDay = await dates.getCurrentDate_D();
    expect(returnedDay, 'day Selector is NOT as expected').to.equal(
      expectedDay
    );

    // YEAR
    const returnedYear = await signUpPage.getYear();
    const expectedYear = await dates.getCurrentYear_YYYY();
    expect(returnedYear, 'year Selector is NOT as expected').to.equal(
      expectedYear
    );
  });
});
