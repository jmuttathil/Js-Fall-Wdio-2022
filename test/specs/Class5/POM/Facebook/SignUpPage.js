const Commands = require('../Commands');
const Dates = require('../../Utils/Dates');

class SignUpPage {
  commands = new Commands();
  dates = new Dates();

  // 1) LOCATORS
  // BASIC PROFILE
  firstNameField = 'input[name=firstname]';
  lastNameField = 'input[name=lastname]';
  numberOrEmailField = 'input[name=reg_email__]';
  passwordField = 'input[name=reg_passwd__]';

  // BIRTHDAY
  monthSelector = '#month';
  monthSelection = '//select[@id="month"]//option[@selected]';
  daySelector = '#day';
  daySelection = '//select[@id="day"]//option[@selected]';
  yearSelector = '#year';
  yearSelection = '//select[@id="year"]//option[@selected]';

  // GENDER
  genderChoice = 'input[value="1"]'; // Female
  genderChoice = 'input[value="2"]'; // Male
  genderChoice = 'input[value="-1"]'; // Custom

  pronounSelector = 'select[name=preferred_pronoun]'; // She/He/They
  customGenderField = 'input[name=custom_gender]'; // Custom String

  // SIGNUP BUTTON
  signUpButton = 'button[name=websubmit]';

  // 2) FUNCTIONS
  // BASIC PROFILE
  async enterFirstName(firstName) {
    await this.commands.typeInWebElement(this.firstNameField, firstName);
  }

  async enterLastName(lastName) {
    await this.commands.typeInWebElement(this.lastNameField, lastName);
  }
  async enterNumberOrEmail(numberOrEmail) {
    await this.commands.typeInWebElement(
      this.numberOrEmailField,
      numberOrEmail
    );
  }
  async enterPassword(password) {
    await this.commands.typeInWebElement(this.passwordField, password);
  }

  // BIRTHDAY
  async setMonth(month) {
    await this.commands.selectByVisibleText(this.monthSelector, month); // Month format MMM
  }
  async setDay(day) {
    await this.commands.selectByVisibleText(this.daySelector, day); // Day format D
  }
  async setYear(year) {
    await this.commands.selectByVisibleText(this.yearSelector, year); // Year format YYYY
  }

  async getMonth() {
    return await $(this.monthSelection).getValue();
  }
  async getDay() {
    return await $(this.daySelection).getValue();
  }
  async getYear() {
    return await $(this.yearSelection).getValue();
  }

  // GENDER

  // SIGNUP BUTTON
  async clickSignUpButton() {
    await this.commands.clickWebElement(this.signUpButton);
  }
}
module.exports = SignUpPage;
