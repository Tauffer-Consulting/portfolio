---
title: 'NLP for language learning applications'
excerpt: 'Employing the power of NLP to improve the language learning experience'
coverImage: '/assets/portfolio/nlp_dependency_parser.gif'
date: '2022-11-10T05:35:07.322Z'
tags:
  - Artificial Intelligence
  - NLP
  - Visualization
  - Cloud Solutions
  - Serverless
author:
  name: Luiz Tauffer
ogImage:
  url: '/assets/portfolio/nlp_dependency_parser.gif'
version: 'published'
---

# NLP for language learning applications

The recent progress in Natural Language Processing (NLP) models brings incredible opportunities for a wide range of applications, but in special for educational platforms. We teamed up with [Fast Data Science](https://fastdatascience.com/) and created an auxiliar service to a language learning app that:
- automatically identifies the language used in a sentence
- translates the sentence to English, while keeping a visual association between words in their original form and their translation
- breaks any sentence from the original language into its component parts, giving a grammatical description for each part
- explains each grammatical relationship present in the original sentence

We implemented the full stack solution with:
- [FastAPI](https://fastapi.tiangolo.com/) for the backend REST API
- [SpaCy](https://spacy.io/) for the NLP processing
- [Docker](https://www.docker.com/) containers running the heavy NLP tasks in a serverless mode in [Azure Container Apps](https://azure.microsoft.com/en-us/products/container-apps/)
- [Plotly Dash](https://plotly.com/) for the frontend application
- [React](https://reactjs.org/) for creating advanced visual components


A great advantage of such a full stack solution is the possibility of merging powerful automatic NLP algorithms with appealing visual elements that facilitate the assimilation of complex information by the users. As an example, we created an interactive and beautiful visual component that allows the users to discover the grammatical dependencies in any particular sentence they are learning by hovering/clicking over the words in a sentence.

![dependency parser](/assets/portfolio/nlp_dependency_parser.gif)
*The grammatical dependency parser visual component*

The use of NLP in language learning applications has the potential to revolutionize the way we teach and learn languages. By automating tasks such as language identification, translation, and grammatical analysis, NLP allows language learning platforms to provide a more comprehensive, interactive and enjoyable experience for their users. With the rapid advancements in NLP methods, the possibilities for language learning applications will soon explode, and we are excited to see what the future holds.

<br>

---

Do you want to incorporate advanced Natural Language Processing solutions to your operations or products? [Get in touch with us](mailto:luiz@taufferconsulting.com)!
