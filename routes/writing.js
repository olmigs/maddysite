var express = require('express');
var sh = require('../public/javascripts/htmlsaver');
var router = express.Router();

router.use(express.static('./public'));

router.get('/', function(req, res, next) {
      res.render('writing', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Writer',
          pagename: 'writing'
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
          pagename: 'projects'
      },
          function (err, html) {
              if (err) throw err;
              sh.saveAsHtml('public/html/projects.html', html);
              res.send(html);
          }
      );
});

module.exports = router;
