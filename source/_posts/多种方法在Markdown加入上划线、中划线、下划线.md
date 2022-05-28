---
title: 多种方法在Markdown加入上划线、中划线、下划线
author: KINGWDY
photos: >-
  https://img0.baidu.com/it/u=2941007552,1400314794&fm=253&fmt=auto&app=138&f=JPEG?w=1000&h=500
top: true
cover: false
toc: false
mathjax: false
summary: 怎么在md中添加上划线、中划线、下划线
categories: 技术
  - Markdown语法教程
abbrlink: 38332
date: 2022-05-17 10:05:00
password:
---
### 上划线和下划线不是Markdown自身语法，因此需要一点摸索，特将结果记录于此
# 1.中划线
## 中划线是markdown自身语法，实现起来很简单：
``` bash
~~中划线~~
```
#### 实现的效果如下：
~~中划线~~

# 2.下划线
## 2.1借助Latex公式
``` 
$\underline{\text{下划线}}$
```
#### 实现的效果如下：
$\underline{\text{下划线}}$
## 2.2行内html（我比较推荐）
``` 
<u>下划线</u>
```
#### 实现的效果如下：
<u>下划线</u>

# 3.上划线
## 3.1借助Latex公式
``` 
$\overline{\text{上划线}}$
```
#### 实现的效果如下：
$\overline{\text{上划线}}$
## 3.2全局Html语法
### 在markdown中效果不太好，因为定义也会被显示，在这里做个记录。
``` 
<head>
<style type="text/css">
h1 {text-decoration: overline}
h2 {text-decoration: line-through}
h3 {text-decoration: underline}
h4 {text-decoration:blink}
</style>
</head>
 
<body>
<h1>这是标题 1</h1>
<h2>这是标题 2</h2>
<h3>这是标题 3</h3>
<h4>这是标题 4</h4>
</body>
```
#### 实现的效果如下：
![截图](https://i.postimg.cc/yYdvY6m2/20200401121345760.png)


# 感谢观看，可以的话请我喝杯咖啡吧~~~
![图片来自网络](https://img2.baidu.com/it/u=2361528755,3827985078&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500)
