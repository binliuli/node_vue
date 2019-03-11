var Global = require("./global"); //根据环境变量，获取对应的IP
var request = require('request');

function httpRequest(method, url, data) {
    var requestUrl = Global.webapi + url;
    console.log(requestUrl, "真实的java接口地址")
    if (method == "get") {
        return new Promise(function (resolve, reject) {
            request({
                url: url,
                method: "GET",
                form: data
            }, function (err, response, body) {
                var data = JSON.parse(body)
                resolve(data);
            })
        })
    } else if (method == "post") {
        return new Promise(function (resolve, reject) {
            request({
                url: url,
                method: "POST",
                form: data
            }, function (err, response, body) {
                var data = JSON.parse(body)
                resolve(data);
            })
        })
    }
}
module.exports = httpRequest;