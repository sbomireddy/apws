

import { ApwsUiProjectPage  } from './APWSPTFAA-59.app.po';


'use strict';
let testData = require('c:/Users/Shravani CTR Bomi Re/Documents/apws-ui1/node_modules/pro.json');
let using = require('jasmine-data-provider');


describe('US:APWSPTFAA-59-Add Project', () => {
  let page: ApwsUiProjectPage;



  beforeEach(() => {
    page = new ApwsUiProjectPage();


  });

  it('TS_0002-To verify the display of Page title of Worklist', () => {
    page.navigateTo();

  });
  it('TS_005-To verify Request', () => {
    page.getText();
  });
  it('TS_005-To go to worklist page', () => {
    page.SearhReq();
  });

  it('TS_005-To verify Add Project', () => {
    page.getMenu();
  });

  it('TS_004-To verify the below fields existence and validation in Project Details Section of Add Project Page', () => {
    page.setRequestValues('testData.projectName', 'testData.projectDescTxt');

  });

//   it('TS_005-To select suspense date', () => {
//     page.selectStartTimeAndDate();
// });

  it('TS_005-To submit project', () => {
    page.pageSubmit1();
  });

  // it('TS_005-To verify success message', () => {
  //   page.message();
  // });
  it('Verify Menu count', () => {
    page.getMenucount();
  });

  it('Add Attachment menu option', () => {
    page.getMenuOptions();
  });
  it('To attach a file', () => {
    page.onfileupload();

  });


});
