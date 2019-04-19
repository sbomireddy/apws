import { protractor, browser, element, by } from 'protractor';

let EC = protractor.ExpectedConditions;




export class MoveProjectPage {
  navigateTo() {

    // return browser.get('https://d2ifpa.faa.gov/apws/#/work');
    return browser.get('https://d2ifpa.faa.gov/apws/#/work');


  }

  getText() {
    browser.driver.sleep(3000);
    element(by.id('keyWord')).clear();
    element(by.id('keyWord')).sendKeys('d2-Automation-1012');
    browser.driver.sleep(3000);
  }

  onclick() {

    browser.actions().mouseMove(element(by.xpath('/html/body/app-root/div/app-works/app-work-list/div/div[3]/div/p-datatable/div/div[1]/table/tbody/tr[1]/td[10]/span/span/div[1]/a'))).click().perform();
    browser.driver.sleep(5000);
  }


  MoveProjectMenu() {


    element(by.id('menuOptions')).click().then(function () {
      element(by.id('moveProject')).click();
      browser.driver.sleep(1000);
      expect(browser.getCurrentUrl()).toMatch('https://d2ifpa.faa.gov/apws/#/project/move/');

    });

  }

  selectExisitngRequest() {

    element(by.id('requestType')).element(by.css("[value='EXISTING']")).click();
    element(by.id('airportId')).sendKeys('OKC');
    browser.driver.sleep(3000);

  }
  clickSearch() {

    let SearchButton = element(by.buttonText('Search'));
    SearchButton.click().then(function () {
      browser.driver.sleep(3000);
    });
  }
  clickRadio(){

    browser.actions().mouseMove(element(by.xpath('/html/body/app-root/div/app-projects/app-project-move/div/div[3]/div[2]/fieldset/form/div[2]/p-datatable/div/div[2]/table/tbody/tr[1]/td[1]/p-dtradiobutton/div/div[2]'))).click().perform();
    // browser.actions().mouseMove(element(by.className('ui-radiobutton ui-widget'))).click().perform();


    browser.driver.sleep(3000);

  }

  submit() {
    let pageSubmitButton = element(by.buttonText('Submit'));
    pageSubmitButton.click().then(function () {
      browser.driver.sleep(300);
    });
  }


  }


