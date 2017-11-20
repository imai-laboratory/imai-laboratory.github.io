var ghpages = require('gh-pages');

ghpages.publish('dist', {
        message: 'Auto-generated commit',
        branch: 'master',
    }, function(err) {
        if (err) console.error(err);
    }
);
