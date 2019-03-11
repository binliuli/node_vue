var express = require('express');
var router = express.Router();
var httpRequest = require('./../config/httpRequest')

/* GET users listing. */
router.get('/search', function (req, res, next) {
  var url = "https://www.apiopen.top/satinApi";//网上找的借口
  var data = req.query
  async function getData() {
    var obj = await httpRequest('get', url, data);
    res.json(obj)
  }
  getData()
});

module.exports = router;
