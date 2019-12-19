var express = require('express');
var sh = require('../public/javascripts/htmlsaver');
var links = require('../public/src/links.json');
var router = express.Router();

router.use(express.static('./public'));
var env = router.get('env');

/* GET home page. */
router.get('/', function(req, res, next) {
      res.render('index', {
          title: 'Madeleine Fellows | Welcome',
          sitename: 'madeleine fellows',
          index_img: 'http://photos.madeleinefellows.com/galleries/home/sellwood.jpg',
          links: (env === 'development') ? links.prod : links.dev
      },
          function (err, html) {
              if (err) throw err;
              sh.saveAsHtml('public/html/index.html', html);
              res.send(html);
          }
    );
});

module.exports = router;
