//------------------
var express = require('express');
var photos = require('../public/src/photos.json');
var fs = require('fs');
var sh = require('../public/javascripts/htmlsaver');
var router = express.Router();

router.use(express.static('./public'));

// define the photos page route
router.get('/', function(req, res, next) {
      res.render('photos', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Photographer',
          pagename: 'photography',
          photos: photos.gallerylist
      }, 
        function (err, html) {
            if (err) throw err;
            fs.writeFile('public/html/photos.html', html, (err) => {
                if (err) throw err;
                console.log('The file %s has been saved!');
            });
            res.send(html);
            //sh.saveAsHtml(html, fs, '/html/photos.html');
        }
      );
});

// define the portraits route
router.get('/portraits', function(req, res, next) {
      res.render('gallery', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Photographer',
          pagename: 'portraits',
          photos: photos.portraits
      }, 
      function (err, html) {
        if (err) throw err;
        sh.saveAsHtml(html, fs, '/html/portraits.html');
    }
  );
});

// define the places route
router.get('/places', function(req, res, next) {
      res.render('gallery', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Photographer',
          pagename: 'places',
          photos: photos.places
      }, 
        function (err, html) {
            if (err) throw err;
            sh.saveAsHtml(html, fs, '/html/places.html');
        }
      );
});

// define the summerculture route
router.get('/summerculture', function(req, res, next) {
      res.render('gallery', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Photographer',
          pagename: 'summer culture',
          photos: photos.summerculture
      }, 
        function (err, html) {
            if (err) throw err;
            sh.saveAsHtml(html, fs, '/html/summerculture.html');
        }
      );
});

// define the home route
router.get('/home', function(req, res, next) {
      res.render('gallery', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Photographer',
          pagename: 'home',
          photos: photos.home
      }, 
        function (err, html) {
            if (err) throw err;
            sh.saveAsHtml(html, fs, '/html/home.html');
        }
      );
});

module.exports = router;
