var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  var obj = {
    name: 'xiaoli',
  }
  res.json(obj)
});

module.exports = router;
