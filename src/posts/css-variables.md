---
layout: post
title: CSS Variables in Practice
date: 2025-04-22
excerpt: How to use CSS custom properties effectively.
thumbnail: /images/css-vars-thumb.jpg
tags:
  - posts
  - ✏️ Design
  - 🎨 Design tokens
  - 🤖 Code
---

CSS custom properties (also known as CSS variables) have transformed how we write and maintain CSS. They allow us to define reusable values that can be referenced throughout our stylesheets.

![Design Tokens Visualization](/images/image.png)

## Basic Syntax

CSS variables are defined using the following syntax:

```css
:root {
  --primary-color: #0a91cc;
  --font-size-base: 16px;
}

.button {
  background-color: var(--primary-color);
  font-size: var(--font-size-base);
}
```
