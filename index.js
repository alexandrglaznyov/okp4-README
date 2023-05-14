const markdownLinkCheck = require('markdown-link-check');

markdownLinkCheck('http://example.com', (err, results) => {
    if (err) {
        console.error('Error', err);
        return;
    }
    results.forEach((result) => {
        console.log('%s is %s', result);
    });
})