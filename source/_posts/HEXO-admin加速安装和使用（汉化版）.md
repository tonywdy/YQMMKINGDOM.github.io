title: HEXO-admin安装和使用（汉化版）
author: KINGWDY
abbrlink: 27498
tags:
  - hexo
  - 插件
  - npm
  - 教程
  - 汉化
categories:
  - 技术
photos: 'https://w.wallhaven.cc/full/e7/wallhaven-e7lv2k.jpg'
date: 2022-05-24 10:27:00
---
##### hi，大家好，我是KINGWDY，众所周知我用的是hexo，写博文首先要在终端输入hexo n xxxxx，然后打开MWeb PRO开始写md，但是，这很麻烦，就在我一筹莫展之际，我看到了这篇博文——[原文链接](https://blog.csdn.net/nineya_com/article/details/103384546)
##### 这位博主介绍的插件是HEXO-admin，我看了一下，觉得很不错，就开始研究！
##### 他的github地址[https://github.com/jaredly/hexo-admin](https://github.com/jaredly/hexo-admin)

### 1.安装
#### 进入 hexo 源文件目录，执行命令：
```
npm install --save hexo-admin
hexo server -d
open http://localhost:4000/admin/
```
### 2.配置
#### 编辑根目录下：_config.yml 文件，添加：
```
admin:
  username: myfavoritename
  password_hash: be121740bf988b2225a313fa1f107ca1
  secret: a secret something
```
#### 其中：
##### username 为登录的用户名，password_hash 为密码的 bcrypt 哈希值，secret 用于使 cookie 安全，可以尽可能复杂。

### password_hash 的生成
##### 首先需安装模块：
``` 
sudo npm install bcrypt-nodejs
```
##### 执行：
``` 
$ node
> const bcrypt = require('bcrypt-nodejs')
> bcrypt.hashSync('your_password')
```
##### 其中的 your_password 为登录密码。
##### 若部署到远程服务器，就可以使用：http://ip:4000/admin/ 进行访问，在线发布 hexo 博客。
##### 一般的链接是http://localhost:4000/admin/
##### 本博客即是通过 hexo-admin 在线编辑并发布的。


##### 但是，你以为就结束了么？
##### 当我打开浏览器，发现hexo-admin里面全是英文，我直接就王**。
##### 最后，我还是做出了一个伟大的决定！汉化他。

##### 其实汉化他还蛮简单的，打开```myblog/node_modules/hexo-admin/www/bundle.js```

##### 然后把bundle.js的内容换成我的代码：
[https://gitlab.com/KINGWDY/tgbb/-/raw/main/bundle.js](https://gitlab.com/KINGWDY/tgbb/-/raw/main/bundle.js)

就可以愉快的play啦~~~


# THE END
##### 感谢观看，可以的话请我喝杯咖啡吧~~~

## 大家不会弄的话直接从这里下载源码，替换掉原来的就好了！
[链接](https://wudingyi1020.lanzouq.com/izche05cy8pa)
### 汉化不易，希望大家可以打赏一下，谢谢！

##### （本文会同步到csdn，大家也可以前往CDSN下载资源，就几个C币，行行好，赏我吧~~~）

http://t.csdn.cn/leQ2Z