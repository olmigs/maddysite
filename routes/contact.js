var express = require('express');
var sh = require('../public/javascripts/htmlsaver');
var links = require('../public/src/links.json');
var router = express.Router();

router.use(express.static('./public'));

router.get('/', function(req, res, next) {
      res.render('contact', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Contact',
          pagename: 'contact me',
          links: (process.env.NODE_ENV === 'development') ? links.dev : links.prod
      },
          function (err, html) {
              if (err) throw err;
              sh.saveAsHtml('public/html/contact.html', html);
              res.send(html);
          }
    );
});

module.exports = router;
