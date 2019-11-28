var express = require('express');
// "database" files
var photos = require('../public/images/photos.json');
var router = express.Router();

router.get('/photos/:pagename', function(req, res, next) {
      res.render('gallery', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Photographer',
          pagename: 'portraits',
          photos: photos.portraits
      });
});

module.exports = router;
