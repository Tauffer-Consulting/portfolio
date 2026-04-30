---
title: 'Creating personalized AI-generated images with Stable Diffusion'
excerpt: 'A test case of putting cutting edge AI models to production'
coverImage: '/assets/portfolio/stable_diffusion_olivia.png'
date: '2023-01-03T10:00:00.322Z'
tags:
  - Artificial Intelligence
  - Cloud Solutions
  - Computer Vision
author:
  name: Luiz Tauffer
ogImage:
  url: '/assets/portfolio/stable_diffusion_olivia.png'
version: 'published'
---

# Creating personalized AI-generated images with Stable Diffusion

The year of 2022 witnessed important breakthroughs in the landscape of big Artificial Inteligence (AI) models, and arguably no algorithm made a bigger splash than [Stable Diffusion](https://github.com/CompVis/stable-diffusion). Stable Diffusion (SD) is a latent text-to-image diffusion model, trained on a large multi-modal dataset and made publicly available by [Stability AI](https://stability.ai/), free to use to anyone interested.

The tasks one could accomplish with SD are numerous and truly mind-blowing:
- Generation of synthetic images from text prompts
- Image modification and enhancement
- Style transfer
- Inpainting and outpainting

Besides the explosion of commercial products built on top of SD, a great number of open source tools and algorithms also emerged, improving SD usability and significantly lowering the entry barrier for less technical users. Some quite popular examples are [Stable Diffusion web UI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) by AUTOMATIC1111, which runs a GUI for working with SD in the browser, and [Dreambooth](https://dreambooth.github.io/), a technique to fine-tune SD and teach it new text-to-image concepts.

At this point, both art aficionados and AI developers alike had a tool of such huge potential at the reach of their fingertips. Anyone could train SD to generate images of themselves, their friends or their pets. And, of course, that's exactly that we did! Meet the **Olivia generator**:

![sd_app](/assets/portfolio/stable_diffusion_olivia.gif)
*A painting of Olivia sitting on top of a table, living room in the background, high quality, style by Van Gogh*

Olivia is the cutest cat in Stockholm. Besides being able to demonstrate all her charm depicted by classical painters, the *Olivia generator app* served also as a proof-of-concept project to probe the viability of putting SD to production.

The full stack solution made use of:
- Stable Diffusion [v1-4 checkpoint](https://huggingface.co/CompVis/stable-diffusion-v1-4) as the base model
- [Dreambooth](https://dreambooth.github.io/) algorithm for model fine-tunning
- 30 photos of Olivia
- [Plotly Dash](https://plotly.com/) for the frontend application
- [Banana](https://www.banana.dev/) as the serverless GPU infrastructure for hosting the inference task


The AI capabilities frontiers expand at an ever increasing speed, while open source tools and models help nourish an effervescent community of developers and tech enthusiasts. In such a virtuous environment, fruitful and exciting novelties arrive every day. It will be interesting to see what the future holds for the field of sythetic image generation and which amazing applications will emerge from it.

<br>

---

Do you want to empower your business with cutting edge AI? We can help you! [Get in touch with us](/#contact)!
