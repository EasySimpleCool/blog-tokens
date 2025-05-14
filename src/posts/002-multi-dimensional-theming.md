---
layout: post
title: Multi-dimensional theming
date: 2025-05-14
excerpt: Second post of my website hahaha
tags:
  - posts
  - ✏️ Design
  - 🎨 Design tokens
  - 🤖 Code
---
## Theming

Short one this time around. I've been working on theming this week, which is all driven by the multidimensional token system I have set up in Figma.

The approach is trying to separate any aspect of your design out into small isolated sets. I use my modify layer to create all the smaller, switchable sets. I have:
- Displaymode x 2 (Backgrounds/surfaces and foreground/text)
- Accent x 3 (Accent color for all interactive elements)
- Screen x 3 (Mainly used to create responsive dimension tokens)
- ~~Density x 3 WIP (How breathing space eg spacious/tight)~~

![Design Tokens Visualization](/images/2A-new-switches.png)

All working in Figma with "set variable mode" very tidy.

![Design Tokens Visualization](/images/2B-mode-switching.gif)

When it came to the styledictionary settings, because it needs to print out every combination of sets eg (1) input x (3) displaymodes  x (3) accents x (3) screens x (1) output I was ending up with 18 different variables files hahaha.

![Design Tokens Visualization](/images/2C-first-export.png)

The names were getting super long too so to keep em readable I changed the name of each set to a bit easier to work with.

![Design Tokens Visualization](/images/2D-shortening-names.png)

I know the UI is terrible rn so thats the next focus.

Next step
- Build switches

Chur.