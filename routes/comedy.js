var express = require('express');
var sh = require('../public/javascripts/htmlsaver');
var links = require('../public/src/links.json');
var embeds = require('../public/src/embeds.json');
var photos = require('../public/src/photos.json');

var router = express.Router();

router.use(express.static('./public'));

router.get('/', function(req, res, next) {
      res.render('comedy', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Comedian',
          pagename: 'comedy',
          kickedOutUrl: 'http://www.kickedout.placeholder.com',
          kickstandUrl: 'http://www.kickstandcomedy.org',
          embeds: embeds.embedslist,
          photos: photos.comedyPage,
          links: (process.env.NODE_ENV === 'development') ? links.dev : links.prod
      },
          function (err, html) {
              if (err) throw err;
              sh.saveAsHtml('public/html/comedy.html', html);
              res.send(html);
          }
    );
});

module.exports = router;
