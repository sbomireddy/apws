import {siap} from './Test-siap-app.po';


describe('SIAP', () => {
  let page: siap;


  beforeEach(() => {
    page = new siap();

  });

  it('TS_001-Navigate to SIAP', () => {
    page.navigateTo();

  });
  it('TS_002-My access', () => {
    page.siap();
  });
  it('TS_003-Add a Procedure', () => {
    page.siap1();
  });

});
