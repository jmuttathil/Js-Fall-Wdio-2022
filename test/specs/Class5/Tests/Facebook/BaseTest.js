const LoginPage = require('../../POM/Facebook/LoginPage');
const SignUpPage = require('../../POM/Facebook/SignUpPage');
const Dates = require('../../Utils/Dates');
const { expect } = require('chai');
const { it } = require('mocha');

describe('SignUp Test Suite', () => {
  it('Verify stuff works', async () => {
    await browser.url('https://www.facebook.com');
    await browser.pause(2000);
  });
});
