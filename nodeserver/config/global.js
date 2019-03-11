var Node_Env = process.env.Node_Env;
console.log(Node_Env)
var webapi = "";
switch (Node_Env) {
    case 'test':
        console.log("测试环境")
        webapi = "测试api"
        break;
    case "preview":
        console.log("预发环境")
        webapi = "预发api"
        break
    case "product":
        console.log("生产环境")
        webapi = "生产api"
        break
    default:
        console.log("默认参数")
        webapi = "本地api"
}
var GLOBALcONFIG = {
    webapi: webapi
}

module.exports = GLOBALcONFIG;