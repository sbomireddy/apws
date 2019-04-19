import { MoveProjectPage } from './APWSPTFAA-111.app.po';




describe('US:APWSPTFAA-111-Move Project', () => {
  let page: MoveProjectPage;

  beforeEach(() => {
    page = new MoveProjectPage();

  });


  it('TS_001-Verify to navigate to Worklist page', () => {
    page.navigateTo();
  });

  it('TS_002-Verify to Search for a Project', () => {
    page.getText();
  });

  it('TS_002-Verify View Project', () => {
    page.onclick();
  });

  it('TS_003-Verify to select Move Project from the Menu Options', () => {
    page.MoveProjectMenu();
  });

  it('TS_004-Verify to select existing Request and enter Airport code', () => {
    page.selectExisitngRequest();
  });

  it('TS_005-Verify to click on Search after entering Airport code', () => {
    page.clickSearch();
  });

  it('TS_005-Verify to click on the request', () => {
    page.clickRadio();
  });

  it('TS_005-Verify submit', () => {
    page.submit();
  });


});
