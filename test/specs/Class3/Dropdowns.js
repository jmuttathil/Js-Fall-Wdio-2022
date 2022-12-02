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
 * 
 */

describe('Dropdown Tests', () => {
    
    it('Select date of birth as 10 Oct 2010', async () => {
        /**
         * Steps:
         * 1. Launch facebook.com
         * 2. Click Create New Account button
         * 3. Select 10 in date dropdown
         * 4. Select Oct in month dropdown
         * 5. Select 2010 in year dropdown
         */

        // 1. Launch facebook.com
        await browser.url('/');

        // 2. Click Create New Account button
        const createNewAccountButton = await $('=Create New Account');
        createNewAccountButton.click();

        await browser.pause(7000);

        // 3. Select 10 in date dropdown
        const dayDropdown = await $('#day');
        dayDropdown.selectByAttribute('value', '10');

        // 4. Select Oct in month dropdown
        const monthDropdown = await $('#month');
        await monthDropdown.selectByVisibleText('Oct');

        // 5. Select 2010 in year dropdown
        const yearDropdown = await $('#year');
        yearDropdown.selectByIndex(12);

        await browser.pause(10000);


    });

});