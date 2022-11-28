/**
 * 
 * <tag1 attr1="value1" attr2="value2" attr3 attr4="value4" attr5="value five" attr6="value six">My Text value</tag1>
 * 
 * 
 * tag -> tag1
 * attribute of tag1 -> att1, attr2, attr3, attr4, attr5, att6
 * NOTE: attribute-names CANNOT have spaces
 * 
 * tag1 has text = My Text value
 * 
 * 
 * <button value="1" class="_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy" name="login" data-testid="royal_login_button" type="submit" id="u_0_5_ju">Log in</button>
 * 
 * text of button-tag -> Log in
 * 
 * attributes of button-tag -> value, class, name, data-testid, type, id
 * 
 * 
     * <tag1 attr11="val1" attr12="val2" attr13>
     *     <tag2 attr21="val21" attr22="val22">
     *         text value
     *     </tag2>
     *     <tag3>
     *         text value again
     *     </tag3>
     *
     * </tag1>
     * 
 *
 * 
 * number of attributes of tag3 -> 0
 * text-value of tag3 -> text value again
 * 
 * number of attributes of tag2 -> 2 (attr21, attr22)
 * text-value of tag2 -> text value
 * 
 * number of attributes of tag1 -> 3 (attr11, attr12, attr13)
 * text-value of tag1 -> no text with tag1
 * 
 * 
 */

/**
 * Locators: way to reach/find webElement
 * 
 * 1. Using id-attribute
 *      id-attribute is always going to be unique in the DOM
 *      To check if id-value is unique, In chropath -> //*[@id='idValue']
 * 
 *      const webElement = await $('#idValue');
 * 
 *      eg:
 *      const loginEmailInputBox = await $('#email');
 * 
 * 2. Using other attribute's value instead id-attribute
 *      To check if any attribute has unique value or not, In chropath -> //tagName[@attrName='attrValue']
 *      NOTE: Attribute's value CANNOT have spaces
 * 
 *      const webElement = await $('tagName[attrName=attrValue]')
 * 
 *      eg:
 *      const loginButton = await $('button[name=login]');
 * 
 * 3. Using linkText (can be used only for links)
 *      To check if linkText is unique or not, In chropath -> //a[text()='Link Text']
 * 
 *      const webElement = await $('=Link Text')
 * 
 *      eg:
 *      const linkButton = await $('=Create New Account');
 * 
 * 4. Using partial linkText (can be used only for links)
 *      To check if partial linkText is unique or not, In chropath -> //a[contains(text() , 'partial Link Text')]
 * 
 *      const webElement = await $('*=partial link text')
 * 
 *      eg:
 *      const linkButton = await $('*=te N');
 * 
 * 5. Using other attribute's partial value instead id-attribute
 *      To check if any attribute has unique partial-value or not, In chropath -> //tagName[contains(@attrName , 'partialAttrValue')]
 *      NOTE: Attribute's value CANNOT have spaces
 * 
 *      const webElement = await $('tagName[attrName*=partialAttrValue]')
 * 
 * 6. Using text value
 *      To check if the text value is unique or not, In chropath -> //tagName[text() = 'text value']
 * 
 *      const webElement = await $('tagName=text value')
 * 
 * 7. Using partial text value
 *      To check if the partial text value is unique or not, In chropath -> //tagName[contains(text() , 'partial text value')]
 * 
 *      const webElement = await $('tagName*=partial text value')
 */

/**
 * Steps to interact with webElement:
 *  1. Find the unique locator strategy to find webElement
 *  2. Based on the strategy, use respect code to find webElement
 *  3. once webElement is found, interact with webElement
 * 
 * To find webElement:
 *  function -> $
 * 
 */

/**
 * Interactions:
 *  1. To click on a particular webElement
 *      function: click()
 * 
 *  2. To type in a particular webElement
 *      function: setValue()
 *      input: String input which we want to type in the webElement
 * 
 *  3. To find if a particular webElement is enabled or not
 *      function: isEnabled()
 *          if webElement is enabled
 *              function returns true
 *          otherwise
 *              function returns false
 *  
 *  4. To find if a particular webElement is displayed or not
 *      function: isDisplayed()
 *          if webElement is displayed
 *              function returns true
 *          otherwise
 *              function returns false
 * 
 *  5. To find if a particular webElement is selected or not
 *      function: isSelected()
 *          if webElement is selected
 *              function returns true
 *          otherwise
 *              function returns false
 */

/**
 * Links:
 *      always have a-tag
 *      text of a-tag (link) is known as linkText
 *      value of href-attribute defines where user will land after clicking the link.
 * 
 * 
 * <a href="https://www.oculus.com/" title="Learn more about Oculus" target="_blank">Oculus</a>
 * 
 * attributes of a-tag -> href, target, title
 * text of a-tag -> Oculus
 * value of href-attribute -> https://www.oculus.com/
 */