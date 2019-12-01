var express = require('express');
var router = express.Router();

router.use(express.static('./public'));

router.get('/', function(req, res, next) {
      res.render('about', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | About',
          pagename: 'about me',
          maddy_img: 'http://photos.madeleinefellows.com/galleries/portraits/selfie-mini.jpg'
      });
});

module.exports = router;
