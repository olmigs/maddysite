//------------------
var express = require('express');
var photos = require('../public/images/photos.json');
var router = express.Router();

router.use(express.static('./public'));

// define the photos page route
router.get('/', function(req, res, next) {
      res.render('photos', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Photographer',
          pagename: 'photography',
          photos: photos.gallerylist
      });
});

// define the portraits route
router.get('/portraits', function(req, res, next) {
      res.render('gallery', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Photographer',
          pagename: 'portraits',
          photos: photos.portraits
      });
});

// define the places route
router.get('/places', function(req, res, next) {
      res.render('gallery', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Photographer',
          pagename: 'places',
          photos: photos.places
      });
});

// define the summerculture route
router.get('/summerculture', function(req, res, next) {
      res.render('gallery', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Photographer',
          pagename: 'summer culture',
          photos: photos.summerculture
      });
});

// define the home route
router.get('/home', function(req, res, next) {
      res.render('gallery', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Photographer',
          pagename: 'home',
          photos: photos.home
      });
});

module.exports = router;
