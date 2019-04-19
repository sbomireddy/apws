import { dupeProjectPage } from './DuplicatePro.app.po';




describe('US:APWSPTFAA-111-dupe Project', () => {
  let page: dupeProjectPage;

  beforeEach(() => {
    page = new dupeProjectPage();

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

  it('TS_003-Verify to select dupe Project from the Menu Options', () => {
    page.dupeProjectMenu();
  });

  it('TS_004-Verify to select existing Request and enter Airport code', () => {
    page.selectExisitngRequest();
  });

  it('TS_005-Verify submit', () => {
    page.submit();
  });


});
