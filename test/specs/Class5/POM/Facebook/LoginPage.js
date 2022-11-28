const Commands = require('../Commands');

class LoginPage {
  commands = new Commands();

  // 1) LOCATORS
  loginEmailField = '#email';
  loginPassField = '#pass';
  loginButton = '<button>';
  newAccountButton = 'a[data-testid=open-registration-form-button]';
  messengerLink = '=Messenger';

  // 2) FUNCTIONS
  async enterLoginEmail(userEmail) {
    await this.commands.typeInWebElement(this.loginEmailField, userEmail);
  }

  async enterLoginPassword(userPwd) {
    await this.commands.typeInWebElement(this.loginPassField, userPwd);
  }

  async clickLoginInButton() {
    await this.commands.clickWebElement(this.loginButton);
  }

  async clickNewAccountButton() {
    await this.commands.clickWebElement(this.newAccountButton);
  }

  async clickMessengerLink() {
    await this.commands.clickWebElement(this.messengerLink);
  }
}
module.exports = LoginPage;
