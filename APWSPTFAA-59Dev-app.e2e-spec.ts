

import { ApwsUiProjectPage  } from './APWSPTFAA-59Dev.app.po';




// describe('Vermon Association', () => {
//   let page: ApwsUiProjectPage;
//
//   beforeEach(() => {
//     page = new ApwsUiProjectPage();
//
//   });
//

describe('US:APWSPTFAA-59Dev-Add Project', () => {
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

  it('TS_004-To verify the below fields e3istence and validation in Project Details Section of Add Project Page', () => {
    page.setRequestValues('Automation-0123-1', 'APWS Description', );

  });

  // it('TS_005-To verify Project field validation message', () => {
  //   page.submit();
  // });


  // it('Verify Vormon Association Add Faility', () => {
  //   page.vormonpageSubmit();
  // });
  //
  // it('Verify Vormon Association Search Button', () => {
  //   page.search();
  // });
//
//   it('Verify Vormon Association Reset Button', () => {
//     page.reset();
//   });
//.
//   it('Verify Vormon Association Seach by State', () => {
//     page.searchbystate();
//   });

  // it('Verify Vormon Association Radio Button', () => {
  //   page.radiobutton();
  // });
  // it('Verify Vormon Association Add Facility Submit', () => {
  //   page.vormonsubmit();
  // });
//   it('Verify Vormon Association Cancel', () => {
//     page.vormoncancel();
//   });
// });

  it('TS_002-To verify the below fields existence and validation in Priorities Section of Add Project Page', () => {
    page.submitRequestClick();
  });

  it('TS_003-To verify radio buttons', () => {
    page.onclick();
  });

  it('TS_005-To verify the functionality of Submit button with toaster message', () => {
    page.pageSubmit1();
  });

  it('TS_005-To verify the success message', () => {
    page.message();
  });

  it('TS_006-To verify the page navigation to view Project', () => {
    page.pageSubmit2();

  });
  it('Verify Menu count', () => {
    page.getMenucount();
  });
});

  describe('US:APWSPTFAA-63-View Project Details', () => {
    let page: ApwsUiProjectPage;


    beforeEach(() => {
      page = new ApwsUiProjectPage();

    });



  it('TS_0002-Verify Project Details', () => {
    page.getParagraphText1();
  });
  it('TS_0002-Verify Scheduling', () => {
    page.getParagraphText2();
  });

  it('TS_0002-Verify Priorities', () => {
    page.getParagraphText3();
  });

  it('TS_0002-Verify Audit Report', () => {
    page.getParagraphText4();
  });

    it('TS_0002-Verify Add Task', () => {
      page.getMenuOptions();
    });

});










