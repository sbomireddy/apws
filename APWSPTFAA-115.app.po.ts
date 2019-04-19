import { protractor, browser, element, by } from 'protractor';

let EC = protractor.ExpectedConditions;

export class ApwsValidateProjectPage {
  navigateTo() {
    return browser.get('https://d2ifpa.faa.gov/apws/#/work');
  }

  getText() {
    browser.driver.sleep(3000);
    browser.waitForAngular();
    element(by.id('keyWord')).sendKeys('AutoProject137');
    browser.driver.sleep(3000);
  }

  onclick() {

    browser.actions().mouseMove(element(by.xpath('/html/body/app-root/div/app-works/app-work-list/div/div[3]/div/p-datatable/div/div[1]/table/tbody/tr/td[10]/span/span/div[1]/a'))).click().perform()
    browser.driver.sleep(5000);
  }

  validateProject () {
    element(by.id('menuOptions')).click().then(function () {
      element(by.id('validateProject')).click();
      browser.driver.sleep(1000);
      expect(browser.getCurrentUrl()).toMatch('https://d2ifpa.faa.gov/apws/#/project/move/');

    });
  }



  pageSubmit() {

    let pageSubmitButton = element(by.buttonText('validateProject'));
    pageSubmitButton.click().then(function(){
      browser.driver.sleep(2000);
      // let toastMessage = element(by.id('toast-container'));
      // expect(toastMessage.getText()).toContain("×\nSuccess\nProject has been successfully moved to the new Request.");
      // browser.driver.sleep(1000);
      //
      //
      // expect(browser.getCurrentUrl()).toContain('https://d2ifpa.faa.gov/apws/#/project');

      // expect(browser.getCurrentUrl()).toMatch('https://localhost:4200/#/request');
    });

  }

}

