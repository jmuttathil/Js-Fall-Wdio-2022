const { expect } = require("chai");
const moment = require("moment/moment");

describe('Scroll Examples', () => {
    /**
     * 
     * scrollIntoView()
     * 
     */

    it('Scroll Example - 1', async () => {
        /**
         * 1. Launch darksky.net
         * 2. Scroll to Time Machine button
         * 3. Click on Time Machine button
         */

        await browser.url('https://www.darksky.net');

        await browser.pause(5000);

        const timeMachineButton = await $('//div[@id="timeMachine"]//a');

        await timeMachineButton.scrollIntoView();

        await browser.pause(5000);

        await timeMachineButton.click();

        await browser.pause(5000);
        
        const now = moment();
        const dateValue = now.format('D');
        // const dateValue = now.date();

        const currentDateLocator = `//td[@data-day="${dateValue}"]`;

        const classValueFor23 = await $(currentDateLocator).getAttribute('class');
        /*
            need to get the value of class-attribute. 
            Verify value of class-attribute is "is-today"
        */

        console.log(`\n\n classValueFor23 -> ${classValueFor23} \n\n`);

        expect(classValueFor23, '').to.equal("is-today");

        await browser.pause(5000);

    });

});