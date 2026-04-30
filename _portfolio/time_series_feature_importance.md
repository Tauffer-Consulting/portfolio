---
title: 'Feature importance analysis for multivariate time series'
excerpt: 'Using Artificial Intelligence to estimate the predictive importance of time series variables'
coverImage: '/assets/portfolio/time_series_feature_importance.jpg'
date: '2021-06-16T10:00:00.322Z'
tags:
  - Data Science
  - Artificial Intelligence
  - Time Series
author:
  name: Luiz Tauffer
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
version: 'published'
---

# Feature importance analysis for multivariate time series

The demand for robust time series analysis is enormous and will only grow in the future. The existing methods for time series modeling, however, are not yet as powerful as the existing methods for tabular, visual and language modeling. One extremely relevant type of analysis lacking for time series is feature importance estimation.

In a recent project, we tested two distinct approaches to estimate feature importance in a multivariate time series dataset and to capture the features that had the greatest impact on the models decisions.

![time series](/assets/portfolio/time_series_feature_importance.jpg)

<br>

## Linear Model approach
There is no standard way of estimating variable importance metrics for lag-features such as is the case for time series. One way around that problem is to produce engineered features that capture important statistics of the historical time windows, such as mean, linear trend and variance.

As a first step, we used the [Tsfresh](https://tsfresh.readthedocs.io/en/latest/) library to calculate these metrics over a rolling window applied to each input feature. Assuming that the Tsfresh-produced features capture most of the time series information, the n-lags time series problem is transformed into a tabular data problem, for which many methods for feature importance estimation are readily available.

A very useful library at this stage is [InterpretML](https://github.com/interpretml/interpret), which has built-in interpretable glassbox models and also methods to explain black box systems. We moved on to use a glassbox Linear Regression (with Lasso regularization) to model the produced tabular data, and used the coefficients of the trained model to weight the importance of each feature in the model decisions.

## Temporal Fusion Transformer approach
As a second approach, we used the [PyTorch Forecasting](https://pytorch-forecasting.readthedocs.io/en/latest/) implementation of the Temporal Fusion Transformer (TFT), an attention-based Deep Neural Network, developed to interpret multi-horizon time series forecasting. TFT has built-in feature importance metrics that come in handy for our goal.


## Conclusions
We performed multiple variants of the feature importance estimation procedures, with leave-one-variable-out and varied prediction windows at trainning step, and found that, overall, both approaches are reasonably consistent. That is, slightly changing the set of input variables or the length of the predicion horizon does not change significantly the ranking of most important features in the project's dataset.

The TFT model is, in principle, able to capture complex interactions in data that the linear model wouldn't be able to. Besides that, the TFT approach can avoid the extra preliminary step of feature engineering that's necessary for the linear approach. The linear model, however, is less prone to overfit than the TFT model, and therefore likely to yield more consistent results over time. The linear approach can also become a much faster (and cheaper) solution to deploy as a service in the Cloud.

<br>

---
Do you have time series data and would like to analyse or to train forecasting models with it? We're here to help you! [Get in touch with us](mailto:luiz@taufferconsulting.com)!