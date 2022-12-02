/**
 * 
 * There are two kinds of dropdowns:
 * 
 *  1. with <select> tag
 *  2. with any other tag
 * 
 * 
 * 1. with <select> tag dropdowns
 *      option-tags in select-tag are present index-wise
 *      option-tags have value-attribute
 *      option-tags have text-value (displayed on Webpage)
 * 
 * Steps to interact with <select>-tag dropdown:
 *  1. Find the dropdown webElement (or select-tag)
 *  2. Use appropriate function in order to select specific value in dropdown
 *      selectByVisibleText()   <-- Preferred
 *      selectByAttribute()
 *      selectByIndex()
 * 
 * 
 * 
 * 2. with any other tag
 *  Steps to interact with non-<select>-tag dropdowns:
 *  1. Find the locator to click on dropdown to view the options
 *  2. Find the locator to click on option which you want to select
 * 
 * 
 */

const { expect } = require("chai");

describe('Dropdown Tests', () => {
    
    it('Dropdowns non-select-tag', async () => {
        
        /**
         * 1. Launch darksky.net
         * 2. Select "˚C, mph" from unit-dropdown
         */

        // 1. Launch darksky.net
        await browser.url('https://www.darksky.net/');

        await browser.pause(5000);

        // 2. Select "˚C, mph" from unit-dropdown
        const unitDropdownLocator = '//div[@id="header"]//div[contains(@class,"selectric-units")]//b';
        const degCelMphLocator = '//div[contains(@class, "selectric-open")]//li[starts-with(text(), "˚C,") and contains(text(), "mph")]'

        await $(unitDropdownLocator).click();

        await browser.pause(1000);

        await $(degCelMphLocator).click();

        await browser.pause(10000);  


    });


    it.only('Verify temp values are correct when user changes the temp-unit', async () => {
        
        /**
         * 1. Launch darksky.net
         * 2. Select "˚C, mph" from unit-dropdown
         * 3. Verify temp conversion is correct
         * 
         */

        // 1. Launch darksky.net
        await browser.url('https://www.darksky.net/');

        await browser.pause(5000);

        // getting tempValue in F
        const tempText = await $('//span[@class="summary swap"]').getText();
        /*
            '41˚ Clear.' -> split('˚') -> ['41' , ' Clear.'] -> index-0 -> '41' -> 41
        */
       const tempValue = Number(tempText.split('˚')[0]);
       const tempCelValue = (tempValue - 32) * 5/9;

        // 2. Select "˚C, mph" from unit-dropdown
        const unitDropdownLocator = '//div[@id="header"]//div[contains(@class,"selectric-units")]//b';
        const degCelMphLocator = '//div[contains(@class, "selectric-open")]//li[starts-with(text(), "˚C,") and contains(text(), "mph")]'

        await $(unitDropdownLocator).click();
        await browser.pause(1000);
        await $(degCelMphLocator).click();
        await browser.pause(1000);

        const tempText2 = await $('//span[@class="summary swap"]').getText();
        const tempValue2 = Number(tempText2.split('˚')[0]);

        expect(tempCelValue, 'Temp value in deg-Celsius is NOT as expected').to.equal(tempValue2);
        
        

    });

});