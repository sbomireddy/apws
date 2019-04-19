

import {protractor, browser, element, by, ExpectedConditions} from 'protractor';

import {ApwsUiTaskPage} from '../../tasks/tasks-new/APWSPTFAA-69Dev.app.po';

import {ApwsUidupeTaskPage} from '../../tasks/tasks-new/APWSPTFAA-119.app.po';

// import {EditProjectPage} from '../../projects/Edit-Project/APWSPTFAA-107.app.po';


import {ApwsEditTaskPage} from '../../tasks/Edit-Task/APWSPTFAA-125.app.po';

import {ProjectRemarks} from '../Edit-Project/Project-Remarks.app.po';

let EC = protractor.ExpectedConditions;



export class ApwsUiProjectPage {
  task = new ApwsUiTaskPage();
  edittask = new ApwsEditTaskPage();
  dupetask = new ApwsUidupeTaskPage();
  ProRemarks = new ProjectRemarks();

  navigateTo() {

    return browser.get('https://d2ifpa.faa.gov/apws/#/work');
  }

  getText() {
    browser.driver.sleep(3000);
    browser.waitForAngularEnabled(false);
    browser.get('/non-angular-login-page.html');
    return browser.get('https://d2ifpa.faa.gov/apws/#/work');
  }

  SearhReq() {

    browser.driver.sleep(3000);
    element(by.id('keyWord')).sendKeys('FOMS-1');
    browser.driver.sleep(3000);
    browser.actions().mouseMove(element(by.xpath('/html/body/app-root/div/app-works/app-work-list/div/div[3]/div/p-datatable/div/div[1]/table/tbody/tr/td[10]/span/span/div[2]/a'))).click().perform();
    browser.driver.sleep(3000);
  }

  getMenu() {

    element(by.id('menuOptions')).click().then(function () {
      element(by.id('addProject')).click();
      browser.driver.sleep(2000);
      expect(browser.getCurrentUrl()).toMatch('https://d2ifpa.faa.gov/apws/#/project/add/');

    });

  }


  setRequestValues(projectName, projectDescTxt) {
    browser.driver.sleep(3000);

    let testData = require('c:/Users/Shravani CTR Bomi Re/Documents/apws-ui1/node_modules/pro.json');
    let count = testData.length;

    let setProjectName = element(by.id('projectName'));
    let setProjectDescTxt = element(by.id('projectDescTxt'));
    // let setWorkflowStartDate = element(by.id('workflowStartDate'));
    // let setsuspndDate = element(by.id('suspendDate'));
    // let setchartDate = element(by.id('chartDate'));
    let alertDanger = element(by.css('.alert-danger'));
    // let setdirectDev = element(by.id('directToDevelopmentInd_0'));


    for (let i = 0; i<1; i++) {
      setProjectName.sendKeys(testData[i].projectName);
      setProjectDescTxt.sendKeys(testData[i].projectDescTxt);
    // setsuspndDate.sendKeys(testData[i].suspndDate);
      browser.driver.sleep(3000);

      // expect(element(by.id('directToDevelopmentInd_0')).isSelected()).toBe(true);
      browser.actions().mouseMove(element(by.id('ifpWorkflowStartTeamCode'))).click().perform();
      expect(element(by.id('ifpWorkflowStartTeamCode')).getText()).toMatch("            Select\n            Central Flight Procedures Team\nEastern Flight Procedures Team\nWestern Flight Procedures Team\n          ");
      element(by.id('ifpWorkflowStartTeamCode')).element(by.css("[value='WEST_FPT']")).click();
      // element(by.id('chartDate')).element(by.css("[value='" + testData[i].chatDate + "']")).click();
      browser.driver.sleep(3000);
      element(by.xpath('//*[@id="suspendDate"]/span/input')).click();
      element(by.partialLinkText('14')).click();
      browser.driver.sleep(2000);
      element(by.id('raptPriorCode')).element(by.css("[value='" + testData[i].raptcode + "']")).click();

      // element(by.id('raptPriorCode')).element(by.css("[value='ROUTINE']")).click();

      element(by.id('productionPriorCode')).element(by.css("[value='1']")).click();
      browser.driver.sleep(3000);


      // element(by.id('ifpWorkflowStartTeamCode')).element(by.css("[value='" + testData[i].teamCode + "']")).click();
      // browser.actions().mouseMove(element(by.id('directToDevelopmentInd_0'))).click().perform();

      // browser.actions().mouseMove(element(by.id('directToDevelopmentInd_1'))).click().perform();
      //   expect(element(by.id('directToDevelopmentInd_1')).isSelected()).toBe(true);
      //     expect(element(by.id('ifpWorkflowStartTeamCode')).getText()).toMatch("            \n            Air Force\nArmy\nTeam 1\nTeam 2\nTeam 3\nTeam 4\nTeam 5\n          ");
      //    element(by.id('ifpWorkflowStartTeamCode')).element(by.css("[value='IFP_DEV_T1']")).click();
      //     browser.driver.sleep(3000);


      // browser.driver.sleep(3000);
      // this.submitRequestClick();
      // browser.driver.sleep(3000);
      // this.onclick();
      // browser.driver.sleep(3000);
      // this.selectStartTimeAndDate();
      this.pageSubmit1();
      this.message();
      // this.getMenuOptions();
      // browser.driver.sleep(3000);
      // this.onfileupload();
      // this.ProRemarks.AddRemarkMenu();
      // browser.driver.sleep(3000);
      // this.ProRemarks.Remarks();
      // this.ProRemarks.displayon();
      // this.ProRemarks.close();
      // this.ProRemarks.Submit();
      // this.ProRemarks.onclickRemark();
      // this.ProRemarks.edit();
      // this.ProRemarks.EditRemarks();
      // this.ProRemarks.EditSubmit();
      browser.driver.sleep(3000);
      this.task.getMenuOptions1();
      browser.driver.sleep(3000);
      this.task.setRequestValues('Task08025', '12', '123456', '12345', 'Comments', '12', 'FlightInspectionComments')
      this.task.submitRequestClick();
      this.task.pageSubmit();
      // this.edittask.getMenuOptions();
      // browser.driver.sleep(3000);
      // this.edittask.setRequestValues('Task-Edit', '12', '123456', '12345', 'Comments', '12', 'FlightInspectionComments')
      // this.edittask.submitRequestClick();
      // this.edittask.pageSubmit();
      // browser.driver.sleep(3000);
      // this.dupetask.getMenuOptions1();
      // browser.driver.sleep(3000);
      // this.dupetask.setRequestValues('Task-Dupe', '12', '123456', '12345', 'Comments', '12', 'FlightInspectionComments')
      // this.dupetask.submitRequestClick();
      // this.dupetask.pageSubmit();
      // browser.driver.sleep(3000);
      // this.getMenu();

      // this.onfileupload();
      // browser.driver.sleep(3000);
      // this.geteditMenuOptions();
    }
  }

  // selectStartTimeAndDate() {
  //
  //   element(by.xpath('//*[@id="suspenseDate"]')).click();
  //   element(by.partialLinkText('5')).click();
  //   browser.driver.sleep(2000);
  //
  // }

  pageSubmit1() {
    let pageSubmitButton = element(by.partialButtonText('Submit'));
    pageSubmitButton.click().then(function () {
      browser.driver.sleep(3000);
    });

  }

  message() {

    let toastMessage = element(by.id('toast-container'));
    expect(toastMessage.getText()).toContain("×\nSuccess\nProject Saved Successfully");
    browser.driver.sleep(3000);

  }
  getMenucount(){
    let list = element(by.css('submenu'));
    element(by.id('menuOptions')).click();
      expect(list.count()).toBe(13);
    }

  getMenuOptions() {

    element(by.id('menuOptions')).click().then(function () {

      element(by.id('addProjectAttachment')).click();
      browser.driver.sleep(5000);

    });

  }


  onfileupload() {

    let path = require('path');

    let fileToUpload = 'C:\\Users\\Shravani CTR Bomi Re\\Desktop\\APWS TC\'s\\dropdown code.txt',
      absolutePath = path.resolve(__dirname, fileToUpload);

    element(by.css('input[type="file"]')).sendKeys(absolutePath);


    let fileupload = element(by.buttonText('Upload'));
    fileupload.click().then(function () {
      browser.driver.sleep(3000);
    });


  }

  // filterWorklist () {
  //
  //
  //   element(by.id('menuOptions')).click().then(function () {
  //     element(by.id('filterWorklist')).click();
  //     browser.driver.sleep(1000);
  //     expect(browser.getCurrentUrl()).toMatch('https://d2ifpa.faa.gov/apws/#/work');
  //
  //     element(by.xpath('/html/body/app-root/div/app-works/app-work-list/div/div[3]/div/p-datatable/div/div[1]/table/tbody/tr/td[10]/span/span/div[1]/a')).click();
  //     // browser.actions().mouseMove(element(by.xpath('/html/body/app-root/div/app-works/app-work-list/div/div[3]/div/p-datatable/div/div[1]/table/tbody/tr/td[10]/span/span/div[1]/a'))).click().perform();
  //     browser.driver.sleep(3000);
  //
  //
  //   });
  // }


  geteditMenuOptions () {


    element(by.id('menuOptions')).click().then(function () {
        element(by.id('editProject')).click();
        browser.driver.sleep(1000);
        expect(browser.getCurrentUrl()).toMatch('https://d2ifpa.faa.gov/apws/#/project/edit/');

      });

  }


}



