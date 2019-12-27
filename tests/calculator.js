let mainPage = require('../pages/mainPage');

describe('demo calculator tests', function() {

    beforeEach(function() {
        mainPage.get('https://juliemr.github.io/protractor-demo/');
    })

    it('addition test', function() {       
        mainPage.enterFirst(3);
        mainPage.enterSecond(4);
        mainPage.clickSubmit();
        mainPage.verifyResult(7);
    });

    it('substraction test', function() {
        mainPage.enterFirst(3);
        mainPage.enterSecond(4);
        mainPage.clickSubmit();
        mainPage.verifyResult(-1);
    });
});