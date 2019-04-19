import { protractor, browser, element, by } from 'protractor';


let EC = protractor.ExpectedConditions;


export class siap {

  navigateTo() {

    return browser.get('https://d2ifpa.faa.gov/dashboard/main.jsf');
  }

  siap() {
    browser.driver.sleep(3000);
    browser.waitForAngularEnabled(false);
    browser.get('/non-angular-login-page.html');
    return browser.get('https://d2ifpa.faa.gov/dashboard/main.jsf');

  }

  OnClick() {
    browser.driver.findElement(by.xpath('//*[@id="dbmainForm:j_id65_span"]')).click();
    browser.sleep(3000);
  }

  OnClicksiap() {
    browser.driver.findElement(by.xpath('//*[@id="dbmainForm:j_id66:anchor"]')).click();
    browser.sleep(3000);
  }

  siapadd() {
    browser.driver.findElement(by.id('sideTree:j__id48:0:j__id48:0::j_id49:handle:img:expanded')).click();
    browser.sleep(3000);
  }

  add() {
    browser.driver.findElement(by.partialLinkText('Add"]')).click();
    browser.sleep(3000);
  }
}
