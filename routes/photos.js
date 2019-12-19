//------------------
var express = require('express');
var photos = require('../public/src/photos.json');
var sh = require('../public/javascripts/htmlsaver');
var links = require('../public/src/links.json');
var router = express.Router();

router.use(express.static('./public'));

// define the photos page route
router.get('/', function(req, res, next) {
      res.render('photos', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Photographer',
          pagename: 'photography',
          photos: photos.gallerylist,
          links: (process.env.NODE_ENV === 'development') ? links.dev : links.prod
      },
        function (err, html) {
            if (err) throw err;
            sh.saveAsHtml('public/html/photos.html', html);
            res.send(html);
        }
      );
});

// define the portraits route
router.get('/portraits', function(req, res, next) {
      res.render('gallery', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Photographer',
          pagename: 'portraits',
          photos: photos.portraits,
          links: (process.env.NODE_ENV === 'development') ? links.dev : links.prod
      },
      function (err, html) {
        if (err) throw err;
        sh.saveAsHtml('public/html/portraits.html', html);
        res.send(html);
    }
  );
});

// define the places route
router.get('/places', function(req, res, next) {
      res.render('gallery', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Photographer',
          pagename: 'places',
          photos: photos.places,
          links: (process.env.NODE_ENV === 'development') ? links.dev : links.prod
      },
        function (err, html) {
            if (err) throw err;
            sh.saveAsHtml('public/html/places.html', html);
            res.send(html);
        }
      );
});

// define the summerculture route
router.get('/summerculture', function(req, res, next) {
      res.render('gallery', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Photographer',
          pagename: 'summer culture',
          photos: photos.summerculture,
          links: (process.env.NODE_ENV === 'development') ? links.dev : links.prod
      },
        function (err, html) {
            if (err) throw err;
            sh.saveAsHtml('public/html/summerculture.html', html);
            res.send(html);
        }
      );
});

// define the home route
router.get('/home', function(req, res, next) {
      res.render('gallery', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Photographer',
          pagename: 'home',
          photos: photos.home,
          links: (process.env.NODE_ENV === 'development') ? links.dev : links.prod
      },
        function (err, html) {
            if (err) throw err;
            sh.saveAsHtml('public/html/home.html', html);
            res.send(html);
        }
      );
});

module.exports = router;
