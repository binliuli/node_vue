var express = require('express');
var router = express.Router();
var co = require('co');
var httpRequest = require('./../config/httpRequest')

/* GET users listing. */
router.get('/getCode', function (req, res, next) {
  co(function* () {
    let result = yield httpRequest("get", "/common/getCode", req.query);
    // res.json(result);
  });

});

module.exports = router;
