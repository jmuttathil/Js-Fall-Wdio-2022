/**
 * Automate below testcase:
 * 
 * Due date: Nov 18 (EOD)
 * 
 * TC-1:
 * Steps:
 * 1. Launch facebook.com
 * 2. Click Create New Account
 * 3. Verify female-gender button is not selected
 * 4. Verify male-gender button is not selected
 * 5. Verify custom-gender button is not selected
 * 6. If female gender is NOT selected, then click on female gender radio button
 * 7. Verify female-gender button is selected
 *
 */ 


 const { expect } = require("chai");
 const { it } = require("mocha");
 
 

 describe('Homework 1', () => {

    it('Verify gender radio buttons', async () => {

        // 1. Launch facebook.com
        await browser.url('/');

        // 2. Click Create New Account button
        const createNewAccountButton = await $('=Create new account');
        createNewAccountButton.click();

        await browser.pause(7000);

        // 3. Verify female-gender button is not selected
        const femaleRadioButton = await $('input[value="1"]');
        const isFemaleGenderSelected = await femaleRadioButton.isSelected();
        expect(isFemaleGenderSelected, 'Female gender is already selected').to.be.false;

        // 4. Verify male-gender button is not selected
        const maleRadioButton = await $('input[value="2"]');
        const isMaleGenderSelected = await maleRadioButton.isSelected();
        expect(isMaleGenderSelected, 'Male gender is already selected').to.be.false;

        // 5. Verify custom-gender button is not selected
        const customRadioButton = await $('input[value="-1"]');
        const isCustomGenderSelected = await customRadioButton.isSelected();
        expect(isCustomGenderSelected, 'Custom gender is already selected').to.be.false;
        
        // 6. If female gender is NOT selected, then click on female gender radio button
        if (isFemaleGenderSelected === false){
            await femaleRadioButton.click();
        }

        // 7. Verify female-gender button is selected
        const isFemaleGenderSelected2 = await femaleRadioButton.isSelected();
        expect(isFemaleGenderSelected2, 'Female gender is NOT selected').to.be.true;

    })

})