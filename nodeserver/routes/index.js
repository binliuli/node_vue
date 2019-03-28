var express = require('express');
var router = express.Router();
var httpRequest = require('./../config/httpRequest')
var fs = require("fs");
var path = require('path')

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

router.get('/list', function (req, res, next) {
  console.log(111)
  console.log(__dirname)// 该行代码所在的目录   D:\express\node_vue\nodeserver\routes
  console.log(path.resolve(__dirname, '..' + "/json/user.json")) // 上级找 D:\express\node_vue\nodeserver\json\user.json
  fs.readFile(path.resolve(__dirname, '..' + "/json/user.json"), 'utf8', function (err, data) {
    console.log(data);
    var obj = JSON.parse(data)
    res.json(obj)
  });
});


router.get('/delete', function (req, res, next) {
  var id = req.query.id;
  fs.readFile(path.resolve(__dirname, '..' + "/json/user.json"), 'utf8', function (err, data) {
    console.log(data);
    var obj = JSON.parse(data)
    var oldArr = obj.data;
    var newArr = []
    for (var i = 0; i < oldArr.length; i++) {
      if (oldArr[i].id !== id) {
        newArr.push(oldArr[i])
      }
    }
    var newObj = {
      "data": newArr
    }
    var str = JSON.stringify(newObj);
    fs.writeFile(path.resolve(__dirname, '..' + "/json/user.json"), str, function (err, data) {
      if (err) {
        console.error(err);
      }
      console.log('----------新增成功-------------');
    })
    res.json(newObj)
  });
});

router.get("/add", function (req, res, next) {
  var query = req.query;
  var addData = {
    name: query.name,
    age: query.age
  }
  fs.readFile(path.resolve(__dirname, '..' + "/json/user.json"), 'utf8', function (err, data) {
    console.log(data);
    var obj = JSON.parse(data)
    var oldArr = obj.data;
    if (oldArr.length > 0) {
      data.id = oldArr[oldArr.length - 1].id + 1;

    } else {
      data.id = 1;
    }
    oldArr.push(addData)

    // 写文件
    var newObj = {
      "data": oldArr
    }
    var str = JSON.stringify(newObj);
    fs.writeFile(path.resolve(__dirname, '..' + "/json/user.json"), str, function (err, data) {
      if (err) {
        console.error(err);
      }
      console.log('----------新增成功-------------');
    })
    res.json(newObj)
  });


})

module.exports = router;
