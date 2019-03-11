var express = require('express');
var router = express.Router();
var co = require('co');
var httpRequest = require('./../config/httpRequest')
var request = require("request")

/* GET users listing. */
router.get('/search', function (req, res, next) {
  var url = "https://www.apiopen.top/satinApi";
  var data = req.query
  async function getData() {
    var obj = await httpRequest('get', url, data);
    console.log(8888, obj.code)
    res.json(obj)
  }
  getData()
});

module.exports = router;
