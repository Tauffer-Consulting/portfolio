---
title: 'Customized UI components for Python applications'
excerpt: 'We bring feature-rich React components to Python applications using Dash'
coverImage: '/assets/portfolio/customized_dash_components.gif'
date: '2021-12-16T10:00:00.322Z'
tags:
  - Visualization
  - GUI
  - ReactJS
  - Python
author:
  name: Luiz Tauffer
ogImage:
  url: '/assets/portfolio/customized_dash_components.gif'
version: 'published'
---

# Customized UI components for Python applications using Dash

Python is the *de facto* language of choice for Artificial Intelligence and Data Science practitioners, it is what most developers use to construct their solutions, from prototyping in Jupyter notebooks to productionizing in Flask applications. However, Python UI frameworks lack the wealth of visual and interactive components of Javascript-based frameworks. [Dash](https://dash.plotly.com) (by Plotly) is a tool that bridges this gap, bringing React to the reach of Python developers.

Besides being an open source project, a very interesting aspect of Dash is that it makes it possible to wrap any React component we want as a Dash component, and then use it in our Python-written applications. Once you spotted the React component you want to port, you can use the [Dash Component Boilerplate](https://github.com/plotly/dash-component-boilerplate) as a base to start wrapping it as a Dash component. When bringing a React component to Dash, it is important to make sure that all relevant props of the component are exposed to the Python class. You can learn more about this process in [their documentation](https://dash.plotly.com/plugins) and by watching their step-by-step [tutorial](https://www.youtube.com/watch?v=wifoPPRgG_I&ab_channel=Plotly).

![Customized Dash Components](/assets/portfolio/customized_dash_components.gif)

<br>

Because many of our clients like to use Dash, either for quick prototyping or for internal usage apps, we have already wrapped many React components to be used by their Dash applications. Here are two examples of projects we have recently developed, containing bundles of components:

## Dash Cool Components
Dash Cool Components is our open-source project which brings three new components: DateTime Picker, Keyed File Browser and Tag Input. You can make use of these components by [pip installing](https://pypi.org/project/dash-cool-components) the package or by cloning and installing from [source code](https://github.com/Tauffer-Consulting/dash-cool-components).

## Dash Pro Components
We teamed up with [Plotly](https://plotly.com) to develop their Enterprise grade Dash Pro Components. This is an ensemble of features-rich, production-ready components to help bring your apps to a professional level. Read more about the Dash Pro Components in our [Medium article](https://medium.com/plotly/building-professional-powerful-applications-with-dash-pro-components-5695fed820d4) or watch [our webinar](https://go.plotly.com/dash-machine-learning?utm_source=Webinar%3A+ML+Pipelines&utm_medium=plotly_resources), where we demonstrate the whole might of these components!


<br>

---

We at Tauffer Consulting have extensive experience with development of Data Visualization and Graphical User Interfaces. Do you need help finding the best visual approach to your data or application? [Get in touch with us](mailto:luiz@taufferconsulting.com)!
