import {AdvanceSearch} from './AdvanceSearch-app.po';




describe('Advance Search', () => {
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
  it('TS_001-To click on Request option"', () => {
    page.option();
  });

  it('Verify Search by ReqName', () => {
    page.reqName();
  });
  it('Verify Search Results', () => {
    page.Search();
  });
  it('Verify Search Results', () => {
    page.results();
  });

  it('click on reset', () => {
    page.reset();
  });

  it('Verify Advance Search by ProDesc', () => {
    page.reqDesc();
  });


  it('Search by Req Type', () => {
    page.reqType();
  });


});

