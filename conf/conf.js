exports.config = {
    directConnect: true,
    
    // Capabilities to be past to the webdriver instance.
    capabilities: {
        browserName: 'firefox'
    },

    // Framework to use,. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['../tests/*.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    allScriptsTimeout: 200000,

    onPrepare: function() {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(15000);
    }
}