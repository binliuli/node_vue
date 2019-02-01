var Global = require("./global");
var request = require('request')
console.log(Global, "Global")
function httpRequest(method, url, data) {
    // 封装request请求 post get
    var requestUrl = Global.xcontractUrl + url;
    console.log(requestUrl, "真实的java接口地址")
    if (method == "get") {
        return function (cb) {
            try {
                request({
                    url: requestUrl,
                    method: "GET",
                    data
                },
                    function (error, response, body) {
                        var data = JSON.parse(body)
                        cb(null, data);
                    }
                )
            } catch (err) {
                commonLog.error('response data error', err);
                logInfo.error('response data error', err);
                cb(err, null)
            }
        }.bind(this);
    } else if (method == "post") {
        return function (cb) {
            try {
                request({
                    url: requestUrl,
                    method: "POST",
                    data: data
                }, function (error, response, body) {
                    var data = JSON.parse(body)
                    cb(null, data);
                });
            } catch (err) {
                commonLog.error('response data error', err);
                logInfo.error('response data error', err);
                cb(err, null)
            }
        }.bind(this)
    }
}
module.exports = httpRequest;