var express = require('express');
var fs = require('fs');
var sh = require('../public/javascripts/htmlsaver');
var router = express.Router();

router.use(express.static('./public'));

router.get('/', function(req, res, next) {
      res.render('about', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | About',
          pagename: 'about me',
          maddy_img: 'http://photos.madeleinefellows.com/galleries/portraits/selfie-mini.jpg'
      },
          function (err, html) {
              if (err) throw err;
              sh.saveAsHtml('public/html/about.html', html, fs);
              res.send(html);
          }
  );
});

module.exports = router;
