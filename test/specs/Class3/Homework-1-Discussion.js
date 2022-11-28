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
 * 
 * 
 * 
 * 
 */

describe('Homework - 1', () => {
    
    it('Homework - 1 Code', async () => {
        // 1. Launch facebook.com
        await browser.url('/');

        // 2. Click Create New Account button
        const createNewAccountButton = await $('=Create New Account');
        createNewAccountButton.click();

        await browser.pause(7000);

        // 3. Verify female-gender button is not selected
        const femaleRadioButton = await $('input[value="1"]');
        const isFemaleGenderSelected = await femaleRadioButton.isSelected();
        expect(isFemaleGenderSelected, 'Female gender is already selected').to.be.false;

        // 6. If female gender is NOT selected, then click on female gender radio button
        if (!isFemaleGenderSelected) {              // isFemaleGenderSelected === false     <--> !isFemaleGenderSelected
            await femaleRadioButton.click()
        }
    });
});

