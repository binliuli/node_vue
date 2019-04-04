# 不积跬步，无以至千里

## myvuecli
```
npm install
npm run serve //本地启动项目
npm run build -- test //打包 只配了test环境
http://localhost:8080/
```

## nodeserver
```
npm install pm2 -g  //安装pm2
npm install 
pm2 delete mypractice.json && pm2 start mypractice.json --env test //启动命令
http://localhost:3000/
```

## 功能实现
```
1、node:读取和写入json文件
2、vuex:简单实现、以及解决刷新页面数据初始化问题
3、visjs 关系图
```
