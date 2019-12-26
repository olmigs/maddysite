var express = require('express');
var sh = require('../public/javascripts/htmlsaver');
var links = require('../public/src/links.json');
var router = express.Router();

router.use(express.static('./public'));

router.get('/', function(req, res, next) {
      res.render('error_prod', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Error',
          pagename: 'error 404',
          links: (process.env.NODE_ENV === 'development') ? links.dev : links.prod
      },
          function (err, html) {
              if (err) throw err;
              sh.saveAsHtml('public/html/error.html', html);
              res.send(html);
          }
    );
});

module.exports = router;
