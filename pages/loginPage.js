let loginPage = function() {

    let usernameInput = element(by.id('AclLoginForm_username'));
    let passwordInput = element(by.id('AclLoginForm_password'));
    let submitButton  = element(by.buttonText('Sign In'));
    let page          = 'http://admin.dev.betterchains.net/user/login#/index';

    this.open = function() {
        browser.get(page);
    };

    this.fillUsername = function(username) {
        usernameInput.sendKeys(username);
    };

    this.fillPassword = function(password) {
        passwordInput.sendKeys(password);
    };

    this.submit = function() {
        submitButton.click();
    };

    this.verify = function(result) {
        let title = browser.getTitle();
        expect(title).toEqual(result);
    }
}

module.exports = new loginPage();