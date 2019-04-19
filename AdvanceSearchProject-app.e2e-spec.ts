import {AdvanceSearch} from './AdvanceSearchProject-app.po';




describe('Advance Search Project', () => {
  let page: AdvanceSearch;


  beforeEach(() => {
    page = new AdvanceSearch();

  });

  it('TS_001-To navigate to APWS url"', () => {
    page.navigateTo();

  });
  it('TS_001-To navigate to Advance Search page"', () => {
    page.advance();
  });

  it('Verify Advance Search by Project Name', () => {
    page.proName();
  });
  it('Verify Advance Search by Project Name', () => {
    page.Search();
  });
   it('Verify Advance Search Project Results', () => {
     page.results();
   });
  it('Verify Reset button', () => {
    page.expandAll();
  });

  it('Verify Reset button', () => {
    page.reset();
  });

  // it('TS_002-To click on Project option', () => {
  //   page.option();
  // });

  it('Verify Advance Search by Project Desc.', () => {
    page.proDesc();
  });
  it('Verify Advance Search by status', () => {
    page.status();
  });

  it('Verify Advance Search by Airspace action', () => {
    page.airspace();
  });

  it('Verify Advance Search by directToICT', () => {
    page.directToICT();
  });

  it('Verify Advance Search by Production Priority', () => {
    page.ProdPriority();
  });



  it('Verify Advance Search by ChartDate', () => {
    page.chartDate();
  });

  it('Verify Advance Search by Workstation', () => {
    page.workstation();
  });



  it('Verify Advance Search by VORMON ID', () => {
    page.VormonID();
  });

  it('Verify Advance Search by ProjectID', () => {
    page.projectID();
  });

  // it('Verify navigation to JIRa', () => {
  //   page.jira();
  // });
  //
  // it('Verify Search UserStory', () => {
  //   page.search();
  // });
  // it('Verify enter functionality', () => {
  //   page.enter();
  // });
  // it('Verify enter functionality', () => {
  //   page.onClick();
  // });
  // it('Verify clicking on comment', () => {
  //   page.comment();
  // });
  // it('Verify enter comments', () => {
  //   page.entercomment();
  // });
  // it('Verify add comments', () => {
  //   page.addcomment();
  // });


});


