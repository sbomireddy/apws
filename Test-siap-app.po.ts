import { protractor, browser, element, by } from 'protractor';


let EC = protractor.ExpectedConditions;


export class siap {

  navigateTo() {

    return browser.get('https://eifpa.faa.gov/iap/index.html#/ ');
  }

  siap() {

    browser.driver.sleep(9000);
    browser.waitForAngularEnabled(false);
    browser.get('/non-angular-login-page.html');
    return browser.get('https://eifpa.faa.gov/iap/index.html#/procedure/add ');
  }
  siap1() {

    browser.driver.sleep(6000);
    element(by.id('approach-guidance-types-RNAV')).click().then(function () {
      browser.driver.sleep(3000);
    });


    browser.driver.sleep(6000);
    element(by.id('approach-guidance-types-VOR')).click().then(function () {
      browser.driver.sleep(3000);
    });


    browser.driver.sleep(3000);
    element(by.id('approach-prefix')).element(by.css("[value='string:AIRSHIP']")).click();
    browser.driver.sleep(3000);


    browser.driver.sleep(3000);
    element(by.id('minor-amendment')).element(by.css("[value='string:A']")).click();
    browser.driver.sleep(3000);


    browser.driver.sleep(3000);
    element(by.id('approach-multiple')).element(by.css("[value='string:A']")).click();
    browser.driver.sleep(3000);


    browser.driver.sleep(3000);
    element(by.id('additional-procedure-alignment-type')).element(by.css("[value='string:STRAIGHT IN']")).click();
    browser.driver.sleep(3000);


    browser.driver.sleep(3000);
    element(by.id('landing-surface-indicator')).element(by.css("[value='string:R']")).click();
    browser.driver.sleep(3000);


    browser.driver.sleep(3000);
    element(by.id('feature-use-military-type')).element(by.css("[value='string:N']")).click();
    browser.driver.sleep(3000);


    browser.driver.sleep(3000);
    element(by.id('rnav-channel')).element(by.css("[value='string:GBAS']")).click();
    browser.driver.sleep(3000);


    browser.driver.sleep(3000);
    element(by.id('rnav-channel-no')).sendKeys('12345');
    browser.driver.sleep(3000);


    browser.driver.sleep(3000);
    element(by.id('navaid-search-id')).sendKeys('okc');
    browser.driver.sleep(3000);
    let pageSubmitButton = element(by.id('navaid-search-button'));
    pageSubmitButton.click().then(function () {
      browser.driver.sleep(3000);
    });

    element(by.id('navaid-results-OKCASR')).click();
    browser.sleep(3000);

    browser.driver.sleep(3000);
    let airport = element(by.id('facility-type-selection-AirportRunway'));
    airport.click().then(function () {
      browser.driver.sleep(3000);
    });


    browser.driver.sleep(3000);
    element(by.id('runway-search-airport-id')).sendKeys('kokc');
    browser.driver.sleep(3000);
    let pageSubmitButton2 = element(by.buttonText('Search'));
    pageSubmitButton2.click().then(function () {
      browser.driver.sleep(3000);
    });

    element(by.id('runway-search-results-runwayNumber-13')).click();
    browser.sleep(3000);

    browser.driver.sleep(3000);
    element(by.id('runway-use-13')).element(by.css("[value='string:Procedure']")).click();
    browser.driver.sleep(3000);

    browser.driver.sleep(3000);
    let pageSubmitButton3 = element(by.id('generate-procedure-name-button'));
    pageSubmitButton3.click().then(function () {
      browser.driver.sleep(3000);
    });

    browser.driver.sleep(3000);
    element(by.id('procedure-name')).sendKeys('Shr12');

    browser.driver.sleep(3000);
    let pageSubmitButton4 = element(by.id('generate-procedure-name-lock-button'));
    pageSubmitButton4.click().then(function () {
      browser.driver.sleep(3000);
    });

    browser.driver.sleep(3000);
    let pageSubmitButton1 = element(by.buttonText('Save'));
    pageSubmitButton1.click().then(function () {
      browser.driver.sleep(3000);
    });


    let toastMessage = element(by.id('success-msg-1'));
    expect(toastMessage.getText()).toContain("×\nSuccess: Procedure Saved Successfully");
    browser.driver.sleep(3000);
    expect(browser.getCurrentUrl()).toContain('https://eifpa.faa.gov/iap/index.html#/procedure');
    // let toastMessage = element(by.id('toast-container'));
    // expect(toastMessage.getText()).toBeFalsy("×\nError!\nRequest could not be added. Please try again")

    element(by.id('tab-segments')).click();
    browser.sleep(3000);

    element(by.id('tab-minimums')).click();
    browser.sleep(3000);


  }
}
