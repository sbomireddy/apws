import { protractor, browser, element, by } from 'protractor';


let EC = protractor.ExpectedConditions;



export class AdvanceSearch {

  navigateTo() {

    return browser.get('https://d2ifpa.faa.gov/apws/#/work');
  }

  advance() {
    browser.driver.sleep(3000);
    browser.waitForAngularEnabled(false);
    browser.get('/non-angular-login-page.html');
    return browser.get('https://d2ifpa.faa.gov/apws/#/search/advanced-search');

  }

  option() {
    browser.driver.sleep(3000);
    element(by.id('request')).click().then(function () {
      browser.driver.sleep(3000);

    });
  }

  reqName() {

  browser.driver.sleep(3000);
  element(by.id('requestName')).sendKeys('Shr Request');
  browser.driver.sleep(3000);
  }
  Search(){
    let pageSubmitButton = element(by.buttonText('Search'));
    pageSubmitButton.click().then(function () {
      browser.driver.sleep(3000);
      expect(browser.getCurrentUrl()).toMatch('https://d2ifpa.faa.gov/apws/#/search/advanced-search');
    });
  }

  results(){

    expect(element(by.partialLinkText)).toMatch('Shr Request');
  }

  reset() {
    browser.driver.sleep(3000);
    let pageResetButton = element(by.buttonText('Reset'));
    pageResetButton.click().then(function () {
      browser.driver.sleep(3000);
      expect(browser.getCurrentUrl()).toMatch('https://d2ifpa.faa.gov/apws/#/search');
    });
  }


reqDesc() {
  browser.driver.sleep(3000);
  element(by.id('desc')).sendKeys('Auto');
  browser.driver.sleep(3000);
 this.Search();
 this.results();
 this.reset();
 this.option();
}


  reqType() {
    browser.driver.sleep(3000);
    browser.actions().mouseMove(element(by.xpath('//*[@id="requestType"]/div/div[3]/span'))).click().perform();
    element(by.id('requestType')).element(by.xpath('//*[@id="requestType"]/div/div[4]/div[2]/ul/li[4]/label')).click();
    browser.driver.sleep(3000);
    this.Search();
    this.results();
    this.reset();
    this.option();
  }

}

