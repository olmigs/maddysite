var express = require('express');
var sh = require('../public/javascripts/htmlsaver');
var links = require('../public/src/links.json');
var photos = require('../public/src/photos.json');
var router = express.Router();

router.use(express.static('./public'));

router.get('/', function(req, res, next) {
      res.render('writing', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Writer',
          pagename: 'writing',
          photos: photos.writingPage,
          links: (process.env.NODE_ENV === 'development') ? links.dev : links.prod
      },
          function (err, html) {
              if (err) throw err;
              sh.saveAsHtml('public/html/writing.html', html);
              res.send(html);
          }
      );
});

// define the projects route
router.get('/projects', function(req, res, next) {
      res.render('projects', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Writer',
          pagename: 'projects',
          links: (process.env.NODE_ENV === 'development') ? links.dev : links.prod
      },
          function (err, html) {
              if (err) throw err;
              sh.saveAsHtml('public/html/projects.html', html);
              res.send(html);
          }
      );
});

module.exports = router;
