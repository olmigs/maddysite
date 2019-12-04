//------------------
var express = require('express');
var photos = require('../public/src/photos.json');
var fs = require('fs');
var sh = reqire('javascripts/htmlsaver');
var router = express.Router();

router.use(express.static('./public'));

// define the photos page route
router.get('/', function(req, res, next) {
      res.render('photos', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Photographer',
          pagename: 'photography',
          photos: photos.gallerylist
      }), 
      sh.saveAsHtml(err, html, fs, 'photos.html');
});

// define the portraits route
router.get('/portraits', function(req, res, next) {
      res.render('gallery', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Photographer',
          pagename: 'portraits',
          photos: photos.portraits
      }), 
      sh.saveAsHtml(err, html, fs, 'portraits.html');
});

// define the places route
router.get('/places', function(req, res, next) {
      res.render('gallery', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Photographer',
          pagename: 'places',
          photos: photos.places
      }), 
      sh.saveAsHtml(err, html, fs, 'places.html');
});

// define the summerculture route
router.get('/summerculture', function(req, res, next) {
      res.render('gallery', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Photographer',
          pagename: 'summer culture',
          photos: photos.summerculture
      }), 
      sh.saveAsHtml(err, html, fs, 'summerculture.html');
});

// define the home route
router.get('/home', function(req, res, next) {
      res.render('gallery', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Photographer',
          pagename: 'home',
          photos: photos.home
      }), 
      sh.saveAsHtml(err, html, fs, 'home.html');
});

module.exports = router;
