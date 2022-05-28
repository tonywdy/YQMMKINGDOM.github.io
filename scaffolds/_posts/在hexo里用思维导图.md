---
title: 在hexo里用思维导图
author: KINGWDY
tags:
  - 教程
  - hexo
  - 思维导图
abbrlink: 25167
date: 2022-05-16 15:53:19
---

# 首先需要先安装插件
``` bash
sudo cnpm install hexo-simple-mindmap //这里默认用淘宝源
```
### mindmap 是思维导图渲染的标志，画板尺寸有三种规格：
### 1.mindmap-sm 小号尺寸的画板
### 2.mindmap-md 中号尺寸的画板
### 3.mindmap-lg 大号尺寸的画板
## 思维导图的内容和层级关系通过无序列表表示，支持基本的文字和超链接。
### 示例代码如下:
``` bash
{% pullquote mindmap mindmap-md %}
- [在 Hexo 中使用思维导图](https://hunterx.xyz/use-mindmap-in-hexo.html)
  - 前言
  - 操作指南
    - 准备需要的文件
    - 为主题添加 CSS/JS 文件
  - 使用方法
{% endpullquote %}
```
### 最终效果如下：
{% pullquote mindmap mindmap-md %}
- [在 Hexo 中使用思维导图](https://hunterx.xyz/use-mindmap-in-hexo.html)
  - 前言
  - 操作指南
    - 准备需要的文件
    - 为主题添加 CSS/JS 文件
  - 使用方法
{% endpullquote %}