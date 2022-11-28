const Commands = require('../Commands');

class LoginErrorPage {
  commands = new Commands();

  // 1) LOCATORS
  loginErrorMsg =
    '//div[contains(text() , "The email or mobile number you entered isn’t connected to an account.")]';

  // 2) FUNCTIONS
  async isLoginErrorDisplayed() {
    return await $(this.loginErrorMsg).isDisplayed();
  }
}
module.exports = LoginErrorPage;
