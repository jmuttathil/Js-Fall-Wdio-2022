/**
 * mocha framework -> helps to write down testcases.
 * 
 * code block:
 *      describe-block
 *          block which represents test-suite for a feature
 * 
 *      it-block
 *          block which represents a testcase
 * 
 * WebDriver global variable:
 *      browser
 * 
 * 
 * Async-await functions
 * 
 * 
 * 
 * 
 */

const { expect } = require("chai");
const { urlContains } = require("wdio-wait-for");



describe('Sample Testcases', () => {
    
    it('Testcase-1', () => {
        
        const res = 2 + 2;

        // Verify res is equals 4
        expect(res, '').to.equal(4);

    });

    it('Launch facebook.com', async () => {
        
        /**
         * To Launch a Webpage
         * function: url
         */
        await browser.url('/');

        /**
         * To pause the execution of testcase/code 
         * function: pause()
         * input: milliSeconds
         */
        await browser.pause(10000);

    });

    it('Verify facebook url', async () => {
        
        /**
         * 1. Launch chrome browser
         * 2. Launch 'https://www.facebook.com'
         * 3. Verify the url is 'https://www.facebook.com'
         */

        // 1. Launch chrome browser
        // 2. Launch 'https://www.facebook.com'
        await browser.url('/');

        // 3. Verify the url is 'https://www.facebook.com/'
        /**
         * To get the current-url on the webpage(web-browser)
         * function: getUrl()
         * return-type: string
         */
        const currentUrl = await browser.getUrl();
        const expectedUrl = 'https://www.facebook.com/';

        expect(currentUrl, 'facebook.com does not to go expected url').to.equal(expectedUrl);

    });

    it('Verify facebook title', async () => {
        
        /**
         * 1. Launch chrome browser
         * 2. Launch 'https://www.facebook.com'
         * 3. Verify the title is 'Facebook - log in or sign up'
         */

        // 1. Launch chrome browser
        // 2. Launch 'https://www.facebook.com'
        await browser.url('/');

        // 3. Verify the url is 'Facebook - log in or sign up'
        /**
         * To get the page-title on the webpage(web-browser)
         * function: getTitle()
         * return-type: string
         */
        const currentTitle = await browser.getTitle();
        const expectedTitle = 'Facebook – log in or sign up';

        expect(currentTitle, 'facebook.com does not have the expected title').to.equal(expectedTitle);

    });

    it('Misc functions from browser', async () => {
        
        await browser.url('/');

        /**
         * To get the windowHandle stored in browser-object
         * function: getWindowHandle()
         * return-type: string
         */

        const windowHandle = await browser.getWindowHandle();

        console.log('\n windowHandle \n');
        console.log(windowHandle);
        console.log('\n windowHandle \n');

        await browser.pause(5000);

        /**
         * To go back in browser
         * function: back()
         */
        await browser.back();

        await browser.pause(5000);

        /**
         * To go forward in browser
         * function: forward()
         */
        await browser.forward();  
        
        await browser.pause(5000);

        /**
         * To refresh a webpage
         * function: refresh()
         */
        await browser.refresh();

        await browser.pause(5000);

        /**
         * Other ways to refresh a webpage
         * 1. go back and forward
         *      back()
         *      forward()
         * 2. re-launch the current-url
         *      get current-url (getUrl())
         *      launch current-url (url())
         *      
         */
        // 1. go back and forward
        await browser.back();
        await browser.pause(2000);
        await browser.forward();

        await browser.pause(5000);

        // 2. re-launch the current-url
        const currUrl = await browser.getUrl();
        await browser.url(currUrl);

        await browser.pause(5000);


    });

    it('Verify facebook title starts with "faCeBooK" (ignore cases)', async () => {
        
        /**
         * 1. Launch chrome browser
         * 2. Launch 'https://www.facebook.com'
         * 3. Verify the page title starts with 'faCeBooK'
         */

        // 1. Launch chrome browser
        // 2. Launch 'https://www.facebook.com'
        await browser.url('/');

        // 3. Verify the page title starts with 'faCeBooK' (ignoring cases)
        /**
         * To get the page-title on the webpage(web-browser)
         * function: getTitle()
         * return-type: string
         */
        const currentTitle = await browser.getTitle();
        const expectedStartsWith = 'faCeBooK';

        const isTitleStartsAsExpected = currentTitle.toLowerCase().startsWith(expectedStartsWith.toLowerCase());
        expect(isTitleStartsAsExpected, 'Facebook title does not start with "Facebook"').to.be.true;

    });

});