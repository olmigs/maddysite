var express = require('express');
var fs = require('fs');
var sh = require('../public/javascripts/htmlsaver');
var router = express.Router();

router.use(express.static('./public'));

router.get('/', function(req, res, next) {
      res.render('contact', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Contact',
          pagename: 'contact me'
      },
          function (err, html) {
              if (err) throw err;
              sh.saveAsHtml('public/html/contact.html', html, fs);
              res.send(html);
          }
    );
});

module.exports = router;
