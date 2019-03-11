var Global = require("./global");
var request = require('request')
console.log(Global, "Global")
function httpRequest(method, url, data) {
    // 封装request请求 post get
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
                console.log(data.code, 222)
                resolve(data)
                //   res.json(data)
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
                console.log(data.code, 222)
                resolve(data)
                //   res.json(data)
            })
        })
    }
}
module.exports = httpRequest;