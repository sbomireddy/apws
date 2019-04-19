import { protractor, browser, element, by } from 'protractor';


let EC = protractor.ExpectedConditions;



export class AdvanceSearch {

  navigateTo() {

    return browser.get('https://d2ifpa.faa.gov/apws/#/work');

  }

  advance() {
    browser.driver.sleep(3000);
    browser.waitForAngularEnabled(false);
    browser.get('/non-angular-login-page.html');
    return browser.get('https://d2ifpa.faa.gov/apws/#/search/advanced-search');
  }



  proName() {

    browser.driver.sleep(3000);
    element(by.id('projectName')).sendKeys('Sameer');
    browser.driver.sleep(3000);
  }
  Search(){
  let pageSubmitButton = element(by.buttonText('Search'));
  pageSubmitButton.click().then(function () {
    browser.driver.sleep(3000);
    expect(browser.getCurrentUrl()).toMatch('https://d2ifpa.faa.gov/apws/#/search/advanced-search');
  });
  }


  results(){
    browser.driver.sleep(3000);
    let headers = element.all(by.xpath('/html/body/app-root/div/app-search/app-advanced-search/div/div[2]/app-advanced-search-result/div[2]/p-datatable/div/div[2]')).map(function(elm) {
      return elm.getText();

    });

    // expect(headers).toEqual([  "Project Name Workstation Status Owner Chart Date Suspense\nSameer Project12 Flight Procedure Team Overdue FPT Central Lead 01/31/2019\nTest New Sameer Proejct Flight Procedure Team Overdue FPT Central Lead 01/31/2019\nSameer Proj Flight Procedure Team Overdue FPT Central Lead 01/31/2019\nSameer New Proejct Flight Procedure Team Overdue FPT Central Lead 01/31/2019"
    // ]);

    // expect(element(by.partialLinkText)).toMatch('');
  }
  expandAll() {
    browser.driver.sleep(3000);
    let pageResetButton = element(by.buttonText('Expand All'));
    pageResetButton.click().then(function () {
      browser.driver.sleep(3000);

    });
  }

  reset() {
    browser.driver.sleep(3000);
    let pageResetButton = element(by.buttonText('Reset'));
    pageResetButton.click().then(function () {
      browser.driver.sleep(3000);
      expect(browser.getCurrentUrl()).toMatch('https://d2ifpa.faa.gov/apws/#/search');
    });
  }

  // option() {
  //   browser.driver.sleep(3000);
  //   element(by.id('project')).click().then(function () {
  //     browser.driver.sleep(3000);
  //   element(by.id('task')).click().then(function () {
  //     browser.driver.sleep(3000);
  //   });
  //   });
  // }


proDesc() {
  browser.driver.sleep(5000);
  element(by.id('projectDesc')).sendKeys('Shr');
  browser.driver.sleep(3000);
  this.Search();
  this.results();
  this.expandAll();
  browser.driver.sleep(3000);
  this.reset();
  //this.option();
}

  status() {
    browser.driver.sleep(3000);
    browser.actions().mouseMove(element(by.xpath('//*[@id="status"]/div/div[3]/span'))).click().perform();
    browser.driver.sleep(3000);
    element(by.id('status')).element(by.xpath('//*[@id="status"]/div/div[4]/div[2]/ul/li[2]/label')).click();
    browser.driver.sleep(3000);
    element(by.id('status')).element(by.xpath('//*[@id="status"]/div/div[4]/div[2]/ul/li[12]/label')).click();
    // browser.actions().mouseMove(element(by.xpath('//*[@id="ownerName"]/div/div[3]/span'))).click().perform();
    // element(by.id('ownerName')).element(by.xpath('//*[@id="ownerName"]/div/div[4]/div[2]/ul/li[60]/label')).click();
    browser.driver.sleep(3000);
    this.Search();
    this.results();
    this.expandAll();
    browser.driver.sleep(3000);
    this.reset();
    //this.option();
  }


  airspace() {
    browser.driver.sleep(3000);
    element(by.id('airspaceAction')).element(by.css("[value='Yes']")).click();
    browser.driver.sleep(3000);
    this.Search();
    this.results();
    this.expandAll();
    browser.driver.sleep(3000);
    this.reset();
    //this.option();
  }



  directToICT() {
    browser.driver.sleep(3000);
    element(by.id('projectName')).sendKeys('FOMS');
    element(by.id('directToICT')).element(by.css("[value='Yes']")).click();
    browser.driver.sleep(3000);
    this.Search();
    this.results();
    this.expandAll();
    browser.driver.sleep(3000);
    this.reset();
    //this.option();
  }



  ProdPriority() {
    browser.driver.sleep(3000);
    browser.actions().mouseMove(element(by.xpath('//*[@id="prodPriority"]/div/div[3]/span'))).click().perform();
    element(by.id('prodPriority')).element(by.xpath('//*[@id="prodPriority"]/div/div[4]/div[2]/ul/li[2]/label')).click();
    browser.actions().mouseMove(element(by.xpath('//*[@id="ifpWorkflowStageCode"]/div/div[3]/span'))).click().perform();
    element(by.id('ifpWorkflowStageCode')).element(by.xpath('//*[@id="ifpWorkflowStageCode"]/div/div[4]/div[2]/ul/li[6]/label')).click();
    browser.driver.sleep(3000);
    this.Search();
    this.results();
    this.expandAll();
    browser.driver.sleep(3000);
    this.reset();
    //this.option();
  }

  chartDate() {
    browser.driver.sleep(3000);
    element(by.id('estimatedChartDate')).element(by.css("[value='2018-12-06']")).click();
    browser.actions().mouseMove(element(by.xpath('//*[@id="ifpWorkflowStageCode"]/div/div[3]/span'))).click().perform();
    element(by.id('ifpWorkflowStageCode')).element(by.xpath('//*[@id="ifpWorkflowStageCode"]/div/div[4]/div[2]/ul/li[4]')).click();
    browser.driver.sleep(3000);
    this.Search();
    this.results();
    this.expandAll();
    browser.driver.sleep(3000);
    this.reset();
    //this.option();
  }



  workstation() {
    browser.driver.sleep(3000);
    browser.actions().mouseMove(element(by.xpath('//*[@id="ifpWorkflowStageCode"]/div/div[3]/span'))).click().perform();
    element(by.id('ifpWorkflowStageCode')).element(by.xpath('//*[@id="ifpWorkflowStageCode"]/div/div[4]/div[2]/ul/li[6]/label')).click();
    browser.driver.sleep(3000);
    this.Search();
    this.results();
    this.expandAll();
    browser.driver.sleep(3000);
    this.reset();
    //this.option();
  }





  Owner() {
    browser.driver.sleep(3000);
    browser.actions().mouseMove(element(by.xpath('//*[@id="ownerName"]/div/div[3]/span'))).click().perform();
    element(by.id('ownerName')).element(by.xpath('//*[@id="ownerName"]/div/div[4]/div[2]/ul/li[16]/label')).click();
    browser.driver.sleep(3000);
    this.Search();
    this.results();
    this.expandAll();
    browser.driver.sleep(3000);
    this.reset();
    //this.option();
  }



  VormonID() {
    browser.driver.sleep(3000);
    element(by.id('prjctVormonID')).sendKeys('GNP');
    browser.actions().mouseMove(element(by.xpath('//*[@id="ifpWorkflowStageCode"]/div/div[3]/span'))).click().perform();
    element(by.id('ifpWorkflowStageCode')).element(by.xpath('//*[@id="ifpWorkflowStageCode"]/div/div[4]/div[2]/ul/li[4]/label')).click();
    browser.driver.sleep(3000);
    this.Search();
    this.results();
    this.expandAll();
    browser.driver.sleep(3000);
    this.reset();
    //this.option();
  }



  projectID() {
    browser.driver.sleep(3000);
    element(by.id('projectID')).sendKeys('5A7A5A045CE344A78FA69997A7EF2CE5');
    browser.driver.sleep(3000);
    this.Search();
    this.results();
    this.expandAll();
    browser.driver.sleep(3000);
    this.reset();
    //this.option();
  }



  // jira() {
  //   return browser.driver.get('https://jira.faa.gov/secure/Dashboard.jspa');
  // }
  //
  //
  // search() {
  //   browser.driver.sleep(9000);
  //   element(by.id('quicksearch')).click();
  // element(by.id('quickSearchInput')).sendKeys('APWSPTFAA-1817');
  // }
  // enter() {
  //   browser.driver.sleep(3000);
  //   browser.actions().sendKeys(protractor.Key.ENTER).perform();
  // }
  // onClick() {
  //   browser.driver.findElement(by.id('contpiv')).click();
  //   browser.driver.sleep(3000);
  //   browser.actions().sendKeys(protractor.Key.ENTER).perform();
  //   let ok = element(by.buttonText('OK'));
  //   ok.click().then(function () {
  //     browser.driver.sleep(3000);
  //   });
  //   browser.actions().sendKeys(protractor.Key.ENTER).perform();
  //   expect(element(by.id('dialog-error')));
  //   browser.actions().sendKeys(protractor.Key.ENTER).perform();
  //   browser.driver.sleep(3000);
  //   browser.actions().sendKeys(protractor.Key.ENTER).perform();
  //   expect(browser.getCurrentUrl()).toMatch('https://jira.faa.gov/projects/APWSPTFAA/issues/APWSPTFAA-1817?filter=allopenissues');
  //   browser.driver.sleep(3000);
  // }
  // comment() {
  //
  //   browser.driver.sleep(9000);
  //   element(by.partialLinkText('Comment')).click();
  //     browser.driver.sleep(3000);
  // }
  // entercomment() {
  //   browser.driver.sleep(3000);
  //   element(by.id('comment')).sendKeys('Automation scripts executed and completed');
  // }
  // addcomment() {
  //   browser.driver.sleep(3000);
  //   let addcomment = element(by.id('issue-comment-add-submit'));
  //   addcomment.click().then(function () {
  //     browser.driver.sleep(3000);
  //   });
  // }
}

