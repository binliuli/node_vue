const Node_Env = process.env.VUE_APP_CURRENTMODE;
console.log(Node_Env)
let webapi = "";
switch (Node_Env) {
    case 'testing':
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
        webapi="http://localhost:3000"
}
const GLOBALCONFIG = {
    webapi: webapi
}
export default GLOBALCONFIG;