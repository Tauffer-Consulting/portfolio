---
title: 'The Power of Vector Databases For Internal Knowledge Similarity Search'
excerpt: 'How to use vector search for detection of subtle differences between unique items.'
coverImage: '/assets/portfolio/vector_database_items_match.png'
date: '2023-10-16T10:00:00.322Z'
tags:
  - Large Language Models
  - Vector Databases
  - Cloud Solutions
  - Artificial Intelligence
author:
  name: Vinícius Camozzato Vaz
ogImage:
  url: '/assets/portfolio/vector_database_items_match.png'
version: 'published'
---

# The Power of Vector Databases For Internal Knowledge Similarity Search

![vector search engine](/assets/portfolio/vector_database_items_match.png)

When handling massive amounts of information, reliably finding small differences in text data is tough. Whether it's sorting product details, parsing user reviews, or identifying duplicate values in text, the challenge remains the same: navigating through a vast sea of data and automatizing tasks with precision and accuracy.

We teamed up with Cardbase, one of the largest collections of trading cards in the world, to tackle precisely this problem: identifying small differences between similar items in their extensive database, which is composed of millions of records.

Making use of Large Language Models (LLMs) and Vector Databases, we built an internal knowledge vector search system capable of detecting and classifying subtle differences between unique card names.

Our approach encompassed:

- **Embeddings:** With [OpenAI's embeddings](https://platform.openai.com/docs/guides/embeddings) models we condensed each item’s text information into a vector representation.
- **Vector Search Database:** We set up a vector database using [Qdrant](https://qdrant.tech) to store all the ground truth cards embeddings, facilitating rapid retrieval of similar cards.
- **Custom Similarity Metric** We developed a custom similarity metric that was a combination of [Cosine Similarity](https://en.wikipedia.org/wiki/Cosine_similarity) and [Levenshtein Distance](https://en.wikipedia.org/wiki/Levenshtein_distance).
- **API:** We developed an API using [FastAPI](https://fastapi.tiangolo.com/) to batch insert and search cards, enabling similarity searches with ease of use by any external system.
- **Trusty Threshold:** By establishing a reliable similarity threshold, we ensured accurate identification of duplicate cards, avoiding insertion of duplicated items.
- **Cron Jobs:** We implemented an automatic cron job that executes daily updates to the database, using [AWS Lambda](https://aws.amazon.com/lambda).

Through our approach, utilizing vector databases alongside advanced LLM embedding models, we significantly automated a process that was once laborious and time-consuming. This not only saved time and resources, but also ensured the integrity of the client's database.


<br>

---

Do you want to empower your business with cutting edge Large Language Models capabilities? We can help you! [Get in touch with us](/#contact)!
