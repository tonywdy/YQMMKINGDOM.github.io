---
title: 关于hexo博客的note标签美化
author: KINGWDY
tags:
  - note标签
  - hexo
  - 博客优化
categories:
  - 技术
abbrlink: 4901
date: 2022-05-25 20:29:00
photos: https://api.flymc.cc/hotlink-ok/cover/91729123_p0.jpg
---
<div class="note info">前言：为了美化hexo博客文章，所以加入note标签并加以美化</div>

#### 引入FontAwesome v4.7.0 版本的 CSS 文件

```
<link type='text/css' rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" media='all'/>
```

<div class="note danger">上面的代码添加至_post.ejs</div>

##### 接着添加一段自定义css代码，复制即可

```
    /* note 公共样式 */
    .note {
        position: relative;
        padding: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
        border: initial;
        border-left: 3px solid #eee;
        background-color: #f9f9f9;
        border-radius: 3px;
        font-size: var(--content-font-size);
    }

    .note:not(.no-icon):before {
        position: absolute;
        font-family: FontAwesome;
        font-size: larger;
        top: 11px;
        left: 15px;
    }

    .note:not(.no-icon) {
        padding-left: 45px;
    }

    .note.info {
        background-color: #eef7fa;
        border-left-color: #428bca;
    }

    .note.info:not(.no-icon):before {
        content: "\f05a";
        color: #428bca;
    }

    .note.warning {
        background-color: #fdf8ea;
        border-left-color: #f0ad4e;
    }

    .note.warning:not(.no-icon):before {
        content: "\f06a";
        color: #f0ad4e;
    }

    .note.primary {
        background-color: #f5f0fa;
        border-left-color: #6f42c1;
    }

    .note.primary:not(.no-icon):before {
        content: "\f055";
        color: #6f42c1;
    }

    .note.danger {
        background-color: #fcf1f2;
        border-left-color: #d9534f;
    }

    .note.danger:not(.no-icon):before {
        content: "\f056";
        color: #d9534f;
    }
```

#### 最后，在写 md 文件时以 html 标签方式引入即可

注意：每个div标签结束后面必须空一行
```
<div class="note info">这里是 info 标签样式</div>

<div class="note info no-icon">这里是不带符号的 info 标签样式</div>

<div class="note primary">这里是 primary 标签样式</div>

<div class="note primary no-icon">这里是不带符号的 primary 标签样式</div>

<div class="note warning">这里是 warning 标签样式</div>

<div class="note warning no-icon">这里是不带符号的 warning 标签样式</div>

<div class="note danger">这里是 danger 标签样式</div>

<div class="note danger no-icon">这里是不带符号的 danger 标签样式</div>
```
<div class="note info">这里是 info 标签样式</div>

<div class="note info no-icon">这里是不带符号的 info 标签样式</div>

<div class="note primary">这里是 primary 标签样式</div>

<div class="note primary no-icon">这里是不带符号的 primary 标签样式</div>

<div class="note warning">这里是 warning 标签样式</div>

<div class="note warning no-icon">这里是不带符号的 warning 标签样式</div>

<div class="note danger">这里是 danger 标签样式</div>

<div class="note danger no-icon">这里是不带符号的 danger 标签样式</div>