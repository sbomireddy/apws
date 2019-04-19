///<reference path="../../../../node_modules/@types/jasmine/index.d.ts"/>

import { protractor, browser, element, by } from 'protractor';

let EC = protractor.ExpectedConditions;




export class ApwsUiProjectPage {
  navigateTo() {

    return browser.get('http://162.58.145.183/#/work');
  }

  getText() {
    browser.driver.sleep(3000);
    browser.waitForAngularEnabled(false);
    browser.get('/non-angular-login-page.html');
    return browser.get('http://162.58.145.183/#/work');
  }

  SearhReq() {

    browser.driver.sleep(3000);
    element(by.id('keyWord')).sendKeys('AMDT OF PROCEDURES');
    browser.driver.sleep(3000);
    browser.actions().mouseMove(element(by.xpath('/html/body/app-root/div/app-works/app-work-list/div/div[3]/div/p-datatable/div/div[1]/table/tbody/tr/td[10]/span/span/div[2]/a'))).click().perform();
    browser.driver.sleep(3000);
  }
  getMenu() {

    element(by.id('menuOptions')).click().then(function () {
      element(by.id('addProject')).click();
      browser.driver.sleep(2000);
      expect(browser.getCurrentUrl()).toMatch('http://162.58.145.183/#/project/add/');

    });

  }

  setRequestValues(projectName, projectDescTxt) {
    let setProjectName = element(by.id('projectName'));
    let setProjectDescTxt = element(by.id('projectDescTxt'));
    // let setWorkflowStartDate = element(by.id('workflowStartDate'));
    // let setWorkflowSuspenceDate = element(by.id('suspendDate'));
    let alertDanger = element(by.css('.alert-danger'));

    setProjectName.sendKeys(projectName);
    expect(setProjectName.getAttribute('value')).toEqual(projectName);
    setProjectDescTxt.sendKeys(projectDescTxt);
    expect(setProjectDescTxt.getAttribute('value')).toEqual(projectDescTxt);
    browser.driver.sleep(3000);
    element(by.xpath('//*[@id="suspendDate"]/span/input')).click();
    element(by.partialLinkText('13')).click();
    browser.driver.sleep(2000);
    // setWorkflowStartDate.sendKeys(workflowStartDate);
    // expect(setWorkflowStartDate.getAttribute('value')).toBe(workflowStartDate);
    // setWorkflowSuspenceDate.sendKeys(workflowSuspenceDate);
    // expect(setWorkflowSuspenceDate.getAttribute('value')).toBe(workflowSuspenceDate);
  this.submitRequestClick();
  this.onclick();
  this.pageSubmit1();

  }

  // submit() {
  //   let pageSubmitButton = element(by.buttonText('Submit'));
  //   pageSubmitButton.click().then(function (){
  //     browser.driver.sleep(500);
  //     let toastMessage = element(by.id('toast-container'));
  //     expect(toastMessage.getText()).toContain("×\nError!\nProject could not be added until all required fields are properly completed. Please try again");
  //     browser.driver.sleep(500);
  //
  //   });
  // }

  // vormonpageSubmit() {
  //   let vormonSubmitButton = element(by.buttonText('Add VORMON Facility'));
  //   vormonSubmitButton.click().then(function () {
  // //     element(by.id('state')).element(by.css("[value='CA']")).click();
  //     element(by.id('id')).sendKeys('BSR');
  //
  //
  //   });
  // }
  //
  // search() {
  //   let search = element(by.buttonText('Search'));
  //   search.click().then(function () {
  //     browser.driver.sleep(500);
  //   });
  // }
  //
  // // reset() {
  // //   let reset = element(by.buttonText('Reset'));
  // //   reset.click().then(function () {
  // //     element(by.id('id')).sendKeys('ROM');
  // //     browser.driver.sleep(500);
  // //   });
  // // }
  // //
  // // searchbystate() {
  // //
  // //   let searchbystate = element(by.buttonText('Search'));
  // //   searchbystate.click().then(function () {
  // //     browser.driver.sleep(500);
  // //   });
  // // }
  //
  // radiobutton() {
  // let radio = element(by.tagName('div')).getText()).toBe('ui-radiobutton-box ui-widget ui-radiobutton-relative ui-state-default');
  //
  // radio.click();
  //
  //   expect(radio.getAttribute('value')).toEqual('enabled');
  //
  // }
  //
  // expect(element(by.tagName('div')).getText()).toBe('ui-radiobutton-box ui-widget ui-radiobutton-relative ui-state-default');
  //   browser.actions().mouseMove(element(by.css('.ui-radiobutton ui-widget'))).click();
  //
  //
  //     browser.actions().mouseMove(element(by.css('.ui-radiobutton-box ui-widget ui-radiobutton-relative ui-state-default'))).click();
  //
  //
  //
  //       browser.actions().mouseMove(element(by.cssContainingText('.ui-cell-data', 'HYP'))).click().perform();
  //       expect(element(by.cssContainingText('.ui-cell-data', 'HYP')).isSelected()).toBe(true);
  //       browser.driver.sleep(6000);
  //
  //
  //
  //
  //
  //

  //
  //
  //
  //
  //
  //
  // vormonsubmit() {
  //   let vormonsubmit = element(by.buttonText('Submit'));
  //   vormonsubmit.click().then(function () {
  //     browser.driver.sleep(500);
  //   });
  // }

  // vormoncancel() {
  //   let vormoncancel = element(by.buttonText('Cancel'));
  //   vormoncancel.click().then(function () {
  //     browser.driver.sleep(500);
  //   });
  // }

  submitRequestClick() {
    let alertDanger1 = element(by.css('.alert-danger'));


    // element(by.id('chartDate')).element(by.css("[value='2018-08-22']")).click();

    element(by.id('raptPriorCode')).element(by.css("[value='ROUTINE']")).click();
    element(by.id('productionPriorCode')).element(by.css("[value='1']")).click();
    //expect(element(by.id('productionPriorCode')).element(by.css("[value='2']")).getText()).toContain("2 - Projects shall not be moved without FPT approval");
    //expect(alertDanger1.isDisplayed()).toBe(false);
    browser.driver.sleep(500);

  }

  onclick() {
    let alertDanger2 = element(by.css('.alert-danger'));
    // browser.actions().mouseMove(element(by.id('airspaceActionInd_1'))).click().perform();
    // expect(element(by.id('airspaceActionInd_1')).isSelected()).toBe(true);
    // browser.driver.sleep(500);

    browser.actions().mouseMove(element(by.id('directToDevelopmentInd_1'))).click().perform();
    expect(element(by.id('directToDevelopmentInd_1')).isSelected()).toBe(true);
    browser.driver.sleep(500);

    expect(element(by.id('ifpWorkflowStartTeamCode')).getText()).toMatch("            \n            Air Force\nArmy\nTeam 1\nTeam 2\nTeam 3\nTeam 4\nTeam 5\n          ");
    element(by.id('ifpWorkflowStartTeamCode')).element(by.css("[value='IFP_DEV_T1']")).click();
    browser.driver.sleep(500);
    //
    // browser.actions().mouseMove(element(by.id('directToDevelopmentInd_0'))).click().perform();
    // expect(element(by.id('directToDevelopmentInd_0')).isSelected()).toBe(true);
    // expect(element(by.id('ifpWorkflowStartTeamCode')).getText()).toMatch("            Central Flight Procedures Team\nEastern Flight Procedures Team\nWestern Flight Procedures Team\n          ");
    // element(by.id('ifpWorkflowStartTeamCode')).element(by.css("[value='WEST_FPT']")).click();

    //expect(alertDanger2.isDisplayed()).toBe(false);
    browser.driver.sleep(500);

  }

  pageSubmit1() {
    let pageSubmitButton = element(by.buttonText('Submit'));
    pageSubmitButton.click().then(function (){
      browser.driver.sleep(1000);

    });

  }
  message(){

    let toastMessage = element(by.id('toast-container'));
    expect(toastMessage.getText()).toContain("×\nSuccess\nProject Saved Successfully");
    browser.driver.sleep(3000);

    // let toastMessage = element(by.id('toast-container'));
    // expect(toastMessage.getText()).toBeFalsy("×\nError!\nProject could not be added. Please try again")
  }

  pageSubmit2() {

    expect(browser.getCurrentUrl()).toMatch('http://162.58.145.183/#/project');
    // expect(browser.getCurrentUrl()).toMatch('https://localhost:4200/#/project');
  }
  getMenucount(){
    // let list = browser.driver.findElement(by.css('.submenu'));
    element(by.id('menuOptions')).click();
    expect(browser.driver.findElement(by.css('.submenu')).getText()).toContain(['Add Attachment', 'duplicateProject', 'addProject',
      'validateProject', 'addProjectRemark', 'Upload CADs', 'editProject','filterWorklist','moveProject','splitMergeProject','print','printFPTD'
    ]);

    browser.driver.sleep(3000);
    // expect(list.count()).toBe(13);
  }

  getParagraphText1() {

    expect(element(by.id('projectName')).isDisplayed()).toBe(true);



    expect(element(by.id('projectDescTxt')).isDisplayed()).toBe(true);
    expect(element(by.id('airspaceActionInd')).isDisplayed()).toBe(true);
    expect(element(by.id('directToDevelopmentInd')).isDisplayed()).toBe(true);
    expect(element(by.id('ifpWorkflowStartTeam')).isDisplayed()).toBe(true);

  }
  getParagraphText2() {
    expect(element(by.id('chartDate')).isDisplayed()).toBe(true);
    expect(element(by.id('workflowStartDate')).isDisplayed()).toBe(true);
    // expect(element(by.id('suspendDate')).isDisplayed()).toBe(true);

  }

  getParagraphText3() {


    expect(element(by.id('raptPriorCodeDesc')).isDisplayed()).toBe(true);
    expect(element(by.id('productionPriorCodeDesc')).isDisplayed()).toBe(true);

  }

  getParagraphText4() {

    expect(element(by.id('projectSeqNumber')).isDisplayed()).toBe(true);
    expect(element(by.id('createDate')).isDisplayed()).toBe(true);
    expect(element(by.id('lastUpdateDate')).isDisplayed()).toBe(true);
    expect(element(by.id('createUserId')).isDisplayed()).toBe(true);
    browser.driver.sleep(1000);
    browser.executeScript('window.scrollTo(0,0);').then(function(){
      console.log('++++++SCROLLED UP+++++');
    });
  }


  getMenuOptions () {

    browser.driver.sleep(1000);
    element(by.id('menuOptions')).click().then(function () {
      element(by.id('addTask')).click();
      browser.driver.sleep(1000);
      expect(browser.getCurrentUrl()).toMatch('http://162.58.145.183/#/task/add/');

    }
  );


    //   });
    // });


  }


}



