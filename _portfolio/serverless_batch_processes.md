---
title: 'Serverless heavy workloads with AWS Batch'
excerpt: 'How we run computationally heavy tasks in a scalable, serverless solution'
coverImage: '/assets/portfolio/serverless_batch_processes.png'
date: '2021-08-26T10:00:00.322Z'
tags:
  - Cloud Solutions
  - Artificial Intelligence
  - Data Science
  - Serverless
author:
  name: Vinícius Camozzato Vaz
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
version: 'published'
---

# Running heavy workloads in a serverless solution with AWS Batch

Running a single light processing job may be trivial, but running multiple heavy tasks at scale can be challenging. [AWS Batch](https://aws.amazon.com/batch/) is a fully managed service that helps you to run batch computing at any scale. AWS Batch automatically provisions compute resources and optimizes the workload distribution based on the required amount and scale.

In a recent project we used AWS Batch for implementing a serverless solution for an intensive asynchronous computing workload accessible through an API. The task was to train custom Artificial Intelligence models on the fly that would be used to extract and save feature importance analysis and then discarded.

The most commom option to train Artificial Intelligence models in the cloud is to use services such as [AWS SageMaker](https://aws.amazon.com/sagemaker/). However, those options impose some limits, like maximum concurrent training jobs for an instance type. These limits can be avoided using Batch since it allows you to define as many vcpus as required for your compute environments. Also its own queue system makes easier to monitor and manage the workload's access to the enviroment resources.

We created an interface to AWS Batch using [AWS Python SDK](https://aws.amazon.com/sdk-for-python/), allowing for any function to submit a new job to Batch using customizable entrypoint parameters. The image represents the infrastructure used for this specific project.

![Infra](/assets/portfolio/serverless_batch_processes.png)

<br>

In summary, we separated the heavy processing tasks from our API running it in Batch and using the Lambdas only to trigger the processes with the specific user data saving the outputs to s3.

## Conclusion
AWS Batch provides an efficient way to process and scale CPU-based as well as GPU-based tasks with no additional charges beyond the resources used. With small logic on top of Python SDK we can create a highly customizable entrypoint for submitting custom asynchronous jobs to different environments and queues.

<br>

---

Does your business need help with Cloud solutions? [Get in touch with us](/#contact)!