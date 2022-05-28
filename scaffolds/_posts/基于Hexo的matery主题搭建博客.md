---
title: 基于Hexo的matery主题搭建博客
author: KINGWDY
img: https://img0.baidu.com/it/u=816004975,558555197&fm=253&fmt=auto&app=138&f=PNG?w=1131&h=500
top: true
cover: false
coverImg: /images/1.jpg
toc: false
mathjax: false
summary: 这篇文章主要分享个人建立hexo博客Matery主题的过程心得
categories: 工具
tags:
  - blog
  - hexo
  - github部署
  - matery主题的运用和美化
abbrlink: 20077
date: 2022-05-15 16:44:00
password:
---
# 准备工作
## 下载git和node
首先，搭建博客需要两个环境，一个是node.js，一个是git。
打开终端（win的cmd）输入
``` bash
node -v	           #查看node版本
git --version      #查看git版本
```
img: https://img-blog.csdnimg.cn/20210111235301324.jpg#pic_center
如果没有显示版本号则需要配置环境变量：
### win:
右键点击“我的电脑”→高级系统设置→环境变量,给在系统变量给node新建变量：变量：NODE_PATH 值：node文件夹所在地址（如：F:\node）然后点击系统变量中Path的编辑，新建以下几个环境变量：
``` bash
F:\node\
F:\Git\Git\cmd
F:\node\node_global\
### ！！！具体情况需要看文件位置而定！！！
```
### mac安装相关服务
然后再验证node和git的版本。
## cnpm安装
直接用npm速度会比较慢（源在国外），没有梯子的就会卡住，因此要利用npm安装cnpm.
打开Git Bash输入以下命令：
``` bash
npm install -g cnpm --registry=http://registry.npm.taobao.org
#安装淘宝的cnpm 管理器
```
安装完成后，以后可以用cnpm直接代替npm.
## hexo框架安装
``` bash
cnpm install -g hexo-cli    //安装hexo框架
hexo -v	    //查看hexo版本
```
# （正题）利用hexo搭建博客
在一个地方创建空文件夹（命名blog），所有东西将在里面生成。
``` bash
win:打开文件夹，在此文件夹下运行git bash（右键单击空白处）
mac:打开终端，cd到文件夹
```
## 注意！！！接下来的mac和win端基本一致，但是mac端必须在hexo安装的根目录运行命令，否则报错
运行下面的这段命令（报错就sudo）
``` bash
sudo hexo init 	#生成博客 初始化博客
```
这时候系统会自动克隆文件到blog，并默认landscape主题。再输入命令：
``` bash
hexo s	#启动本地博客服务
```
这里就可以看到
``` bash
INFO  Hexo is running at http://localhost:4000 . Press Ctrl+C to stop.
```
### 打开浏览器，输入http://localhost:4000本地调试
# 创建文章
输入命令：
``` bash
hexo n "我的第一篇文章（这里改为你的文章名）" 
```
可以看到在source文件夹下的_posts文件夹下创建了.md文件。
打开文件就可以编辑内容，里面是基于markdown语法的。
想了解Markdown语法如何使用，请看b站视频[15分钟快速上手Markdown教程](https://www.bilibili.com/video/BV1hJ411X75X?from=search&seid=9433284770037044167)
# 部署到github
### 今天先到这，日更（搭建文章已经很累了，我想休息一会，请谅解，有事请留言）

