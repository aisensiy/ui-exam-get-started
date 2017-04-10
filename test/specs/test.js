module.exports = {
    'Body content test': function(browser) {
        browser
            .url(browser.launch_url)
            .waitForElementVisible('body', 1000)
            .assert.containsText('body', 'Hello, World');
    }
}