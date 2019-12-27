const loginPage = require('../pages/loginPage');

describe('This login', function() {
    let until = protractor.ExpectedConditions;
    
    let username = 'ig.ca.koritza@mailinator.com';
    let passwordValid = '123123';
    let passwordInvalid = '123';
    let result = 'Better Chains - Dashboard'

    beforeEach(() => {
        loginPage.open();
        browser.waitForAngularEnabled(false);
        browser.sleep(1000);
    });

    xit('should be valid', function() {
        loginPage.fillUsername(username);
        loginPage.fillPassword(passwordValid);
        loginPage.submit();

        let condition = element(by.id('bs-example-navbar-collapse-1'));
        browser.wait(condition, 15000).then(loginPage.verify(result));
    });

    it('should be invalid', function() {
        loginPage.fillUsername(username);
        loginPage.fillPassword(passwordInvalid);
        loginPage.submit();
        //browser.sleep(2000);

        let errorMessage = element(by.xpath('/html/body/div[1]/div/form/div/div[2]/div/div[1]/div[2]/div[3]'));
        browser.wait(until.visibilityOf(errorMessage), 5000);
        
        expect(errorMessage.getText()).toEqual('Username or password is incorrect');
    });

    xit('should not login with only username filled', function() {
        loginPage.fillUsername(username);
        loginPage.submit();
        browser.sleep(2000);

        let errorMessage = element(by.xpath('/html/body/div[1]/div/form/div/div[2]/div/div[1]/div[2]/div[2]')).getText();
        browser.wait(errorMessage, 15000).
            then(
                expect(errorMessage).toEqual('Password cannot be blank.')
            );
    });
})
