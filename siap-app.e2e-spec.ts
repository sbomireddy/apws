import {siap} from './siap-app.po';


describe('SIAP', () => {
  let page: siap;


  beforeEach(() => {
    page = new siap();

  });

  it('TS_001-To navigate to SIAP application"', () => {
    page.navigateTo();

  });
  it('TS_001-To navigate to SIAP"', () => {
    page.siap();
  });
  it('TS_001-To navigate to  Procedure"', () => {
    page.OnClick();
  });
  it('TS_001-To navigate to SIAP Procedure"', () => {
    page.OnClicksiap();
  });
  it('TS_001-To navigate to SIAP Name Tree"', () => {
    page.siapadd();
  });

  it('TS_001-To navigate to add Procedure"', () => {
    page.add();
  });

});
