var express = require('express');
var fs = require('fs');
var sh = require('../public/javascripts/htmlsaver');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
      res.render('index', {
          title: 'Madeleine Fellows | Welcome',
          sitename: 'madeleine fellows',
          index_img: 'http://photos.madeleinefellows.com/galleries/home/sellwood.jpg'
      },
          function (err, html) {
              if (err) throw err;
              sh.saveAsHtml('../public/html/index.html', html, fs);
              res.send(html);
          }
    );
});

module.exports = router;
