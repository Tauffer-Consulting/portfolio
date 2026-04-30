---
title: 'Data standardization for neuroscience research'
excerpt: 'Open source software and visualization tools applied to neuroscience data standardization efforts'
coverImage: '/assets/portfolio/neuroscience_data_standardization.jpg'
date: '2021-10-16T05:35:07.322Z'
tags: 
  - Data Science
  - Visualization
  - Science
  - OSS
author:
  name: Luiz Tauffer
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
version: 'published'
---

# Data standardization for neuroscience research

Explaining the phenomena of mind and complex behavior is a challenging frontier for human sciences (for now), and [efforts in this direction](https://www.braininitiative.org/) have earned special attention and funding in the past decade, especially in the field of neuroscience. The substantial investiment increase in neuroscience research has helped the development of more advanced methods for acquisition of neural data, from brain imaging to electrophysiology.

In its current state, neuroscience research could surely be represented by a massive, multidimensional jigsaw puzzle, where each specific combination of recording techniques, species, brain areas and behavior being investigated produces an unique piece, apparently isolated, but with great potential for connecting with other pieces being produced by other combinations of those factors. In this intricate universe of data, the lack of comprehensive and widely adopted neural data standards is a massive road-block, slowing the progress toward solving this big puzzle!

![brain science](/assets/portfolio/neuroscience_data_standardization.jpg 'Photo by Robina Weermeijer on Unsplash')  

<br>

To the rescue, comes [Neurodata Without Borders](https://www.nwb.org/) (NWB). In its own words, NWB is “a data standard for neurophysiology, providing neuroscientists with a common standard to share, archive, use, and build analysis tools for neurophysiology data”. NWB is a file standard with well defined hierarchical organization of data types, but flexible enough to accommodate diverse experimental combinations of recording formats.

We joined forces early on with [CatalystNeuro](https://www.catalystneuro.com/) in developing an array of tools that facilitate the adoption of NWB by experimental neuroscience labs. Here are some of them:


## NWB Conversion Tools 
[NWB Conversion Tools](https://github.com/catalystneuro/nwb-conversion-tools) is a package for creating NWB files by converting and combining neural data from proprietary formats and adding essential experimental metadata. It features an intuitive Python API for data conversion from custom experimental settings, with diverse combinations of data formats.

## NWB Web GUI
[NWB Web GUI](https://github.com/catalystneuro/nwb-web-gui) is a web Graphical User Interface for NWB Conversion Tools that makes it even easier to edit metadata information and to explore converted NWB files.

## NWB Jupyter Widgets
[NWB Jupyter Widgets](https://github.com/catalystneuro/nwb-jupyter-widgets) is a library of Jupyter widgets for interactive visualization and exploration of NWB data in Jupyter notebooks.

These open source tools are already being used by 20+ experimental labs across the United States and Europe, helping these groups promote their research results and fostering collaboration and data reuse.

<br>

---

At Tauffer Consulting we love to put our skills to the service of science and academic research! Need assistance with software development, data science, visualization or user interfaces in your own research? [Get in touch with us](/#contact)!
