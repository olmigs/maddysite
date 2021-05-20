var express = require('express');
var sh = require('../public/javascripts/htmlsaver');
var links = require('../public/src/links.json');
var zines = require('../public/src/zines.json');
var router = express.Router();

router.use(express.static('./public'));

router.get('/', function(req, res, next) {
      res.render('zines', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Zine Editor',
          pagename: 'zines',
          zines: zines.zinelist,
          links: (process.env.NODE_ENV === 'development') ? links.dev : links.prod
      },
          function (err, html) {
              if (err) throw err;
              sh.saveAsHtml('public/html/zines.html', html);
              res.send(html);
          }
    );
});

module.exports = router;
