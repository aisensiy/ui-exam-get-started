module.exports = {
    'should get body content': function(browser) {
        browser
            .url(browser.launch_url)
            .waitForElementVisible('body', 1000)
            .assert.containsText('body', 'Hello, World');
    },
    'should get content end with World': function(browser) {
        browser
            .url(browser.launch_url)
            .waitForElementVisible('body', 1000)
            .assert.containsText('body', 'World!!');
    }
}
