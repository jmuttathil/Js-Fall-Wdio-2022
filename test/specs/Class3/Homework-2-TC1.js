/**
 * Automate below testcase:
 *
 * Due date: Nov 21 (Mon)
 *
 * TC-1: https://www.facebook.com/
 * Facebook: Verify current date is displayed on Sign-Up form
 *
 * Steps:
 * 1. Launch facebook.com
 * 2. Click Create New Account button
 * 3. Verify current date is displayed in Date of birth dropdowns
 *
 */ 

const { expect } = require("chai");
const { it } = require("mocha");
const moment = require("moment");

describe("Homework-2 : TC-1", () => {
  it("Homework-2 : TC-1", async () => {
    // 1. Launch facebook.com
    await browser.url("/");

    // 2. Click Create New Account button
    const createNewAccountButton = await $("*=Create");
    createNewAccountButton.click();

    await browser.pause(7000);

    // 3. Verify current date is displayed in Date of birth dropdowns
    const now = moment(); // get the current timestamp

    // MONTH
    const expectedMonth = now.month() + 1;
    var monthSelector = await $("#month").getValue();
    monthSelector = parseInt(monthSelector);
    expect(monthSelector, "month Selector is NOT as expected").to.equal(
      expectedMonth
    );

    // DAY
    const expectedDay = now.date();
    var daySelector = await $("#day").getValue();
    daySelector = parseInt(daySelector);
    expect(daySelector, "day Selector is NOT as expected").to.equal(
      expectedDay
    );

    // YEAR
    const expectedYear = now.year();
    var yearSelector = await $("#year").getValue();
    yearSelector = parseInt(yearSelector);
    expect(yearSelector, "year Selector is NOT as expected").to.equal(
      expectedYear
    );
  });
});
