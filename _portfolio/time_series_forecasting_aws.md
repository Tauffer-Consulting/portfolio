---
title: 'High-grade time series forecasting with AWS'
excerpt: 'We bring powerful time series models to the reach of non-tech users'
coverImage: '/assets/portfolio/time_series_forecasting_aws.png'
date: '2021-05-16T10:00:00.322Z'
tags:
  - Artificial Intelligence
  - Cloud Solutions
  - Time Series
author:
  name: Luiz Tauffer
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
version: 'published'
---

# High-grade time series Forecasting with AWS

Artificial Intelligence algorithms are promising tools for generating reliable time series forecasting. The technical literature in time series forecast algorithms keeps growing, while the number of high quality open source projects in the theme keeps increasing, making the training and deployment of time series forecast models more feasible by the day. However, the sheer complexity of those solutions still renders them accessible only to a handful of professionals skilled in mathematics and programming.

Higher level services such as [Amazon Forecast](https://aws.amazon.com/forecast/) intend to facilitate the usage of advanced Artificial Intelligence models. These services, however, still pose a high entry barrier to non-technical professionals. We teamed up with [NeuroQuant](https://www.neuroquant.ai/) to create an intermediate layer between lay users and the convoluted Amazon Forecast service, making high-grade forecasting models just a few clicks away for the end users!

Our solution consisted of [Step Functions](https://aws.amazon.com/step-functions/) making the smart coordination of a sequence of [Lambda Functions](https://aws.amazon.com/lambda/), yielding flexible logics for scalability, batch processing, status monitoring, error catching and logging. This architecture helped us to coordinate better the typical demands from the frontend applications with typically slow processing times of the AWS Forecast.

![service architecture](/assets/portfolio/time_series_forecasting_aws.png)

<br>

The solution can be broken down into three stages:

- **API entry point**: the API is responsible for receiving the data from the frontend applications, validating it and triggering the start of the corresponding Step function. For the creation and maintenance of the api service, we used [AWS API Gateway](https://aws.amazon.com/api-gateway/).
- **Workflow logic**: as the Amazon Forecast processes take a long time to run and we need to monitor their health status along the way, we can’t use single Lambda functions for this task, due to their 15 minutes running limitation. We implemented the workflow logic using Step Functions, to coordinate periodical checks, retries and waiting operations at each step of the Forecast processes.
- **Amazon Forecast interface**: custom Lambda functions format the received data, construct the task according to the frontend user specifications and send forward a request to run specific Amazon Forecast processs, like training a model or creating predictions for an already trained model. These functions also interact with the [AWS RDS](https://aws.amazon.com/rds/) database service to store status and results at each step of the Artificial Intelligence process.

Amazon Forecast can be a valuable tool for time series modeling at any scale of data. However, its use is convoluted and not trivial for non-technical users. Using AWS services such as Step Functions, API Gateway and Lambda Functions we were able to create an intermediate service layer which provides to non-technical users access to powerful time series forecasting algorithms.

<br>

---

Do you want to incorporate state-of-the-art Artificial Intelligence solutions into your operations? Need help with Cloud infrastruture? [Get in touch with us](/#contact)!
