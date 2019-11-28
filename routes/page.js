var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
      res.render('page', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Web Portfolio',
          pagename: 'welcome'
      });
});

module.exports = router;
