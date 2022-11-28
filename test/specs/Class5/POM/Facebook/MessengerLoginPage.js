const Commands = require('../Commands');

class MessengerLoginPage {
  commands = new Commands();

  // 1) LOCATORS
  keepMeSignedInBox = 'input[name=persistent]';
  LogInButton = '#loginbutton';
  findYourAccountLink = '=Find your account and log in.';
  continueButton = '#loginbutton';
  keepMeSignedInLabel = 'label=Keep me signed in';

  // 2) FUNCTIONS
  async isKeepMeSignedInSelected() {
    return await $(this.keepMeSignedInBox).isSelected();
  }

  async clickMessengerLogInButton() {
    await this.commands.clickWebElement(this.LogInButton);
  }

  async isFindYourAccountLinkDisplayed() {
    return await $(this.findYourAccountLink).isDisplayed();
  }

  async isContinueButtonEnabled() {
    return await $(this.continueButton).isEnabled();
  }

  async clickKeepMeSignedIn() {
    await this.commands.clickWebElement(this.keepMeSignedInLabel);
  }
}
module.exports = MessengerLoginPage;
