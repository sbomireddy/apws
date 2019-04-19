import { protractor, browser, element, by } from 'protractor';

let EC = protractor.ExpectedConditions;




export class dupeProjectPage {
  navigateTo() {

    // return browser.get('https://d2ifpa.faa.gov/apws/#/work');
    return browser.get('https://d2ifpa.faa.gov/apws/#/work');


  }

  getText() {
    browser.driver.sleep(3000);
    element(by.id('keyWord')).clear();
    element(by.id('keyWord')).sendKeys('d2-Automation-1013');
    browser.driver.sleep(3000);
  }

  onclick() {

    browser.actions().mouseMove(element(by.xpath('/html/body/app-root/div/app-works/app-work-list/div/div[3]/div/p-datatable/div/div[1]/table/tbody/tr[1]/td[10]/span/span/div[1]/a'))).click().perform();
    browser.driver.sleep(5000);
  }


  dupeProjectMenu() {


    element(by.id('menuOptions')).click().then(function () {
      element(by.id('duplicateProject')).click();
      browser.driver.sleep(1000);
      expect(browser.getCurrentUrl()).toMatch('https://d2ifpa.faa.gov/apws/#/project/duplicate/');

    });

  }

  selectExisitngRequest() {

    element(by.id('projectName')).sendKeys('Duplicate-2');
    browser.driver.sleep(3000);

  }


  submit() {
    let pageSubmitButton = element(by.buttonText('Submit'));
    pageSubmitButton.click().then(function () {
      browser.driver.sleep(300);
    });
  }


  }


