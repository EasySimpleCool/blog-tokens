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
I’ve been wanting to build a new personal site/folio for ages, finally got to it 😳😂.
The goal of this thing is to be able to post small snippets of my work, it could be finished work, explorations, tips, random findings/learnings. Another reason is to learn end-to-end design → build and get a better idea of how to implement my designs in the real world.

For zeece post ima go over the design and build.

## Design

Starting with the design token structure, I went with a 4 tiered approach:
- Input (dump of all basic tokens)
- Modify (switchable sets eg screen for responsive spacing, displaymode for light/dark mode)
- Output (usable theme)
- Comp (components specific)

The language is usually primitive/semantic etc buh i just wanted to be different and try out something new bahaha.

Next was creating a design system with a basic set of components. The list is:
- Layout components (Section, Container, Box and Stack)
- 4 Text styles (Large, Medium, Small, Tiny)
- Image (Aspect ratio locked 4:3)
- Tags
- Button
- PostPreview and PostDetail (Pretty much cards)

![Design Tokens Visualization](/images/1A-design-system.png)

Everything was designed in Figma with the intention of keeping a tight loop between design / translation / build and vice versa.

I am a complete Figma nerd, so everything was built with all the best that it has to offer, Shift+A (Autolayout), Variables mixed with a layout system that ive refined and used over the last couple years.

Figma Variables has always felt a bit jank, working with Tokens Studio is has been a way better experience. I set up my design tokens to make them export nicely into Figma Variables, which removed the need to even touch the Figma Variables UI for editing/changing. Simple “export to variables” button and let TS handle the rest.
Shift+D (Devmode) now allows us to pretty much extract the css from any selected element. This is a massive improvement to the design → build process. The naming from TS is retained when translated to Figma Variables, and even from here in devmode the variables line up with the css variables created (in build)

Design ✅

## Build

I tried to keep the stack as lightweight as possible, and a free place to store it. Stuff I used:
- Figma + Tokens Studio (Push JSON tokens to git)
- Style Dictionary (Converts JSON tokens into usable css variables)
- HTML & CSS
- 11ty (Static site generator uses markdown to create posts)
- Netlify (Deploys from github repo)

Biggest blocker here was getting the tokens to process properly (even with the help of claude and cursor AI). There was a lot of trial and error push tokens to git → automated action process the tokens → wait for green tick of success.

Once the CSS variables got the green tick, it was just jumping into a fresh build of an 11ty site and applying the variables to create the pieces of UI.

I chose 11ty because you can create posts with markdown files. So I can use my current notes app (Obsidian) to write a post, and then save it and drag the .md file into posts folder, then let 11ty handle the rest. Gameover mate.

Theres prolly a markdown plugin in Figma that could streamline the process 🤷‍♂️ but ill look into it later.

## First post done.

Pretty happy with this first version of the site, it lets me post stuff, and all the styling is driven by what I have within Figma + Tokens Studio. Make a change to section h-pad in Figma TS, it triggers an action that rebuilds the css variables, then netlify sees a new push and triggers a new build as well.
Change in Tokens Studio -> Push to Git -> Rebuilds CSS -> Netlify rebuilds site
Next steps are:

- Theming (Screen and Displaymode)
- Storybook implementation (current team uses this so learning it wouldnt hurt)

Chur.