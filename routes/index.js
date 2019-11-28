var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Madeleine Fellows | Welcome',
      pagename: 'madeleine fellows',
      index_img: "http://photos.madeleinefellows.com/galleries/home/sellwood.jpg"
  });
});

module.exports = router;
