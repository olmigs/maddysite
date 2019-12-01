var express = require('express');
var router = express.Router();

router.use(express.static('./public'));

router.get('/', function(req, res, next) {
      res.render('contact', {
          sitename: 'madeleine fellows',
          title: 'Madeleine Fellows | Contact',
          pagename: 'contact me'
      });
});

module.exports = router;
