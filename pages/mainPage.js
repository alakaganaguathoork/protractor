//POM for Super Calculator app demo

let mainPage = function() {

    let first = element(by.model('first'));
    let second = element(by.model('second'));
    let submit = element(by.css('[ng-click="doAddition()"]'));


    this.get = function(url) {
        browser.get(url);
    };

    this.enterFirst = function(number) {
        first.sendKeys(number);
    };

    this.enterSecond = function(number) {
        second.sendKeys(number);
    };

    this.clickSubmit = function() {
        submit.click();
    };

    this.verifyResult = function(result) {
        let output = element(by.binding('latest'));

        expect(output.getText()).toEqual(result.toString());
    };
    
};

module.exports = new mainPage();