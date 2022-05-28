---
title: 利用 Gulp 来压缩你的 Hexo 博客
author: KINGWDY
img: 'https://i.postimg.cc/HsBCcL7m/2022-05-17-09-01-59.png'
top: false
cover: false
coverImg: /images/1.jpg
toc: false
mathjax: false
summary: 这篇文章介绍了如何利用 Gulp 来压缩你的 Hexo 博客的静态文件（ html / css / js ），达到提高访问速度的目的。
categories: 教程
tags:
  - blog
  - hexo
  - 代码压缩
  - npm
abbrlink: 5560
date: 2022-05-17 09:44:00
password:
---
## 这篇文章介绍了如何利用 Gulp 来压缩你的 Hexo 博客的静态文件（ html / css / js ），达到提高访问速度的目的。

# 1.Gulp简介
### gulp.js 是一种基于流的，代码优于配置的新一代构建工具。具体前往官网啦
### 反正是一个基于 node 的用于自动化的工具，和 Grunt 比较类似，不过亮点是`流`和`写代码`，所以会比 Grunt 快一点。

# 2.准备环境
### 2.1首先安装 Gulp
``` bash
npm install gulp -g 
```
#### 然后 cd 到博客的根目录安装压缩静态文件要用的依赖包
``` bash
npm install gulp-minify-css gulp-babel gulp-uglify gulp-htmlmin gulp-htmlclean --save-dev
```
~~（这里提倡使用 cnpm）~~
# 辣鸡 cnpm 装的包各种权限问题，不推荐了哼。等有空写写如何优雅地在国内使用`npm`好了。
### 2.2创建gulpfile.js
#### 在博客的根目录创建文件 gulpfile.js,然后粘贴代码
``` bash
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');

gulp.task('minify-css', function () {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./public'));
});

gulp.task('minify-html', function () {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
});

gulp.task('minify-js', function () {
    return gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});

gulp.task('default', ['minify-html', 'minify-css', 'minify-js']);
```
# !!!注意!!!
### gulp-babel 只能转换如箭头函数等一部分 ES6 的新特性 对 import 无能为力 如果需要压缩含有 import 特性的代码 需要使用 webpack 或者 browserify 等工具 具体教程网上有 我因为用不到也就没仔细研究
# 3.压缩方法
#### 在 hexo g 之后在 cmd 里敲入 gulp 回车就可以啦
#### 推荐姿势：
``` bash
hexo cl && hexo g && gulp && hexo d
```
#### gulp运行截图
![截图](https://img.leaferx.ink/86504825e54d397ab0b2.jpg)
#### gulp运行前后比较
![截图](https://img.leaferx.ink/563fe13572154f249748.jpg)
# 4.更为推（tou）荐（lan）的姿势
### 打开博客根目录的 package.json ，在 "scripts" 项增加一个 "publish" 命令：
```bash
{
  //...
  "scripts": {
    //...
    "publish": "hexo cl && hexo g && gulp && hexo d",
    //...
  }
  //...
}
```
### 然后每次需要部署的时候只要运行下面命令就可以啦。
```bash
npm run publish
```
#### 省了 20 个字符呢