---
title: Hexo（sakura）设置私密文章
author: KINGWDY
abbrlink: 64683
date: 2022-05-26 10:02:34
tags:
    - hexo
    - 博客优化
    - 文章加密
    - npm
categories: 技术
photos: https://w.wallhaven.cc/full/q2/wallhaven-q2qpl7.jpg 
---
# 一、前言
博客文章置顶是基于Next主题的优化：hexo博客优化之文章置顶+置顶标签
实践证明：直接按照轮子造车是开不了滴
关键因素：在于sakura版本中，主题作者在themes\sakura\layout_partial\ archive.ejs 和 category-archive.ejs 中设置了：按照日期的排序法，不同主题的Hexo需要针对性设置哦！



# 文章加密
安装插件
```
npm install hexo-blog-encrypt --save
```
主配置文件MyWeb\_config.yml文末添加：
```
# 文章加密
encrypt:
  enable: true
  default_abstract: 这是一篇加密文章，内容可能是个人情感宣泄或者收费技术。如果你非常好奇，请与我联系。
  default_message: 输入密码，查看文章。
```

```
encrypt:
  enable: true
  default_abstract: 这是一篇加密文章，内容可能是个人情感宣泄或者收费技术。如果你非常好奇，请与我联系。
  default_message: 输入密码，查看文章。
```

启用博文加密。
3-21修改:去掉default_

```
encrypt:
  enable: true
  abstract: 这是一篇加密文章，内容可能是个人情感宣泄或者收费技术。如果你非常好奇，请与我联系。
  message: 输入密码，查看文章。
```

文章Front-matter中加上password: 123456即可：
```
---
title: Hello World
abbrlink: 3eeb
password: 123456
---
```

效果如下：
![图片](https://img-blog.csdnimg.cn/20200217164024166.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2N1bmd1ZGFmYQ==,size_16,color_FFFFFF,t_70)

自定义提示语：
```
---
title: Hello World
abbrlink: 3eeb
password: 123456
abstract: 密码：123456
message: 看不到吧，hhhh，不告诉你密码是123456
---
```
其中：
### password: 是该博客加密使用的密码
### abstract: 是该博客的摘要，会显示在博客的列表页
### message: 这个是博客查看时，密码输入框上面的描述性文字
效果：（此页面是不支持复制功能的o！）
![photo](https://img-blog.csdnimg.cn/20200217170924804.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2N1bmd1ZGFmYQ==,size_16,color_FFFFFF,t_70)

# 如果你开启了 字数统计功能 的话，那么本文的统计也会失效。
加密文章，显示了评论，是不是很奇怪？？
需要额外隐藏浏览数、评论、作者信息等

![photo](https://img-blog.csdnimg.cn/20200217174345787.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2N1bmd1ZGFmYQ==,size_16,color_FFFFFF,t_70)

在任何需要加密的地方加上一句：
```
<% if (post.encrypt == true) { %>style="display:none" <% } %>
```
例如:
![2](https://img-blog.csdnimg.cn/20200217174129858.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2N1bmd1ZGFmYQ==,size_16,color_FFFFFF,t_70)
---
![3](https://img-blog.csdnimg.cn/20200217174552734.png)
# ps.需要时加上password，提示语message，abstract摘要，后两者不能设置为空哦。
