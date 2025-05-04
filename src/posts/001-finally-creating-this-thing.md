---
layout: post
title: Finally creating this thing
date: 2025-04-22
excerpt: First post of my website
thumbnail: /images/css-vars-thumb.jpg
tags:
  - posts
  - ✏️ Design
  - 🎨 Design tokens
  - 🤖 Code
---

I've been wanting to redo my folio for ages, just never got to it.

The goal of this site is to be able to post small snippets of my work, it could be finished work, explorations, tips, random findings/learnings or whatever really.

This is me first post.

I’v had this idea of creating a barebones design system with only the basic set of components. The list is:

- Layout components (Section, Container, Box and Stack)
- 4 Text styles (Large, Medium, Small, Tiny)
- Image (Aspect ratio locked 4:3)
- Tags
- Button
- PostPreview and PostDetail (Pretty much cards)

![Design Tokens Visualization](/images/image.png)

I tried to keep the stack as lightweight as possible (to my knowledge, prolly learn more about speed as I go). Stuff I used:

- Figma + Tokens Studio (Push JSON tokens to git)
- Style Dictionary (Converts JSON tokens into usable css variables)
- Pure HTML & CSS
- 11ty (Static site generator uses markdown to create posts)

There was a whole bunch of stuff that I wanted to learn from building this thing, the main one was controlling Figma Variables, Design Tokens, CSS Variables. Having full control of how variables from Figma can be processed and turned into usable css variables.

```css
:root {
  --primary-color: #0a91cc;
  --font-size-base: 16px;
}

{
  "comp": {
    "button": {
      "primary": {
        "bg-default": {
          "$type": "color",
          "$value": "{output.color.accent.primary}"
        },
        "bg-hover": {
          "$type": "color",
          "$value": "{output.color.accent.lighter}"
        },
        "fg": {
          "$type": "color",
          "$value": "{output.color.accent.on-accent}"
        }
      },
      "min-h": {
        "$type": "dimension",
        "$value": "64px"
      },
      "b-rad": {
        "$type": "dimension",
        "$value": "{output.border-radius.small}"
      },
      "pad": {
        "$type": "dimension",
        "$value": "{output.dimension.fixed-16}"
      }
    }
  }
}

.button {
  background-color: var(--primary-color);
  font-size: var(--font-size-base);
}
```