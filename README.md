# express-ejs
基于express和ejs的一个前端模板

## 安装
` npm install `

## 运行
` node-dev --inspect app.js `

## 目录结构

    .
    ├── app.js  webserver启动文件
    ├── assets  前端用到的静态文件，包括CSS文件、js文件、图片文件
    ├── node_modules
    ├── package.json
    ├── routes  路由文件，相当于MVC结构中的controler
    └── views 前端页面模板文件

## Q&A
1.引入第3方js库的方法

单页面：
https://stackoverflow.com/questions/12794860/how-to-use-node-modules-like-momentjs-in-ejs-views

全局引入：
  ` <link href="/core/css/bootstrap.min.css" rel="stylesheet" >`

2.引入第三方css方法

` <link href="/core/css/bootstrap.min.css" rel="stylesheet" > `
