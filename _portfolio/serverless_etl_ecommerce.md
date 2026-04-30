---
title: 'Fully automated serverless ETL for e-commerce'
excerpt: 'Implementation of a serverless solution for daily data gathering and database updating'
coverImage: '/assets/portfolio/serverless_etl_ecommerce.png'
date: '2021-07-16T10:00:00.322Z'
tags: 
  - Cloud Solutions
  - ETL
  - Serverless
author:
  name: Vinícius Camozzato Vaz
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
version: 'published'
---

# Fully automated serverless ETL workflow for e-commerce

The goal of this project was to implement an ETL workflow, that runs automatically and daily, to get data from a popular e-commerce API service, process it according to the client requirements and store it on a scalable SQL Database. The service was divided into two different workflows according to the type of resource to be fetched in the external API.

The two biggest challenges here were:

- to search for more than 1 million registers for the first workflow and more than 10 million for the second, so a completely synchronous approach is prohibitive.
- a strict limitation on the number of calls per second to the API service of the data source, which restricted the parallelization in the extraction phase.

The solution we implemented used [AWS Step Functions](https://aws.amazon.com/step-functions) to manage and run multiple [Lambdas Functions](https://aws.amazon.com/lambda/) in parallel, where each lambda runs a batch of asynchronous functions for fetching data from the external API. This gave us the capacity to extract, transform and load more than 1500 registers per second, respecting the external API limits and database CPU and I/O restrictions.

![workflow schematic](/assets/portfolio/serverless_etl_ecommerce.png)

<br>

In summary, we achieved higher ETL data throughput and reliable automatic scheduling of jobs in a full serverless implementation by:

- Using Step Functions to orchestrate multiple ETL workflows.
- Using parallel Lambda Functions with asynchronous functions to make multiple simultaneous requests to the API.
- Storing the Docker Images for the Lambda functions at [Amazon ECR](https://aws.amazon.com/ecr/).
- Using [Aurora RDS](https://aws.amazon.com/rds/aurora) for high-availability and cost-effective storage.
- Implementing an API dedicated to read from this database, to be used by other services.

<br>

---

Does your business need help with ETL solutions or Cloud infrastructure? [Get in touch with us](mailto:luiz@taufferconsulting.com)!
