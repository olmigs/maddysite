var express = require('express');
var fs = require('fs');
var sh = require('../public/javascripts/htmlsaver');
var router = express.Router();

router.use(express.static('./public'));

router.get('/', function(req, res, next) {
      res.render('writing', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Writer',
          pagename: 'writing'
      });
});

// define the projects route
router.get('/projects', function(req, res, next) {
      res.render('projects', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Writer',
          pagename: 'projects'
      });
});

module.exports = router;
