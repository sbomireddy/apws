

import { ApwsValidateProjectPage  } from './APWSPTFAA-115.app.po';




describe('US:APWSPTFAA-115-Validate Project', () => {
  let page: ApwsValidateProjectPage;


  beforeEach(() => {
    page = new ApwsValidateProjectPage();

  });


  it('TS_003-To verify navigation to worklist page', () => {
    page.navigateTo();
  });


  it('TS_005-To Search Project', () => {
    page.getText();
  });


  it('TS_006-To verify the page navigation to view Project', () => {
    page.onclick();

  });

  it('TS_006-To verify the Validate Project Menu option', () => {
    page.validateProject();

  });


  it('TS_006-To click on submit', () => {
    page.pageSubmit();

  });
});







