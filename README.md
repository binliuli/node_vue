# 不积跬步，无以至千里

## myvuecli
```
npm install
npm run serve 本地启动项目
npm run build -- test 打包 只配了test环境
http://localhost:8080/
```

## nodeserver
```
npm install pm2 -g 安装pm2
npm install 
启动：pm2 delete mypractice.json && pm2 start mypractice.json --env test
>http://localhost:3000/
```

## 功能实现
1.读取写入json文件
