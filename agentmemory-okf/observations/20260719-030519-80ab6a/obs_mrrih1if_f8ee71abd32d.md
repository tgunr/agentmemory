---
type: WebFetch
title: V language ML/AI and scientific computing ecosystem research
description: Survey of available V libraries for machine learning and scientific computing as of 2026
resource: agentmemory://observation/obs_mrrih1if_f8ee71abd32d
tags: ["V language scientific computing", "VSL library", "vtl tensor library", "autograd reverse-mode AD", "neural network layers Conv2D LSTM Attention", "CUDA Vulkan GPU training", "machine learning algorithms K-means SVM random forest", "linear algebra QR LU Cholesky SVD", "webfetch"]
timestamp: 2026-07-19T08:05:48.131914+00:00
source: agentmemory
session_id: 20260719_030519_80ab6a
importance: 5
confidence: 1
---
# Summary

Web search identified the V language ecosystem for ML and scientific computing. VSL is the core scientific library, with vsl.ml for traditional ML algorithms and vtl for deep learning with autograd, neural network layers, and optional GPU acceleration via CUDA/Vulkan. The ecosystem is maturing with comprehensive linear algebra, FFT, and tensor support.

## Facts
- VSL (vlang/vsl) is the primary V library for AI and high-performance scientific computations
- vsl.ml provides K-means, KNN, linear/logistic regression, SVM, decision trees, random forest
- vtl (V Tensor Library) supports n-dimensional tensors, autograd (reverse-mode AD), and neural networks with Sequential API including Linear, Conv2D, LSTM, Attention layers
- vtl includes optimizers (Adam, AdamW, SGD) and losses (MSE, BCE, CrossEntropy, Huber)
- vtl has optional CUDA and Vulkan training paths and zero-copy Tensor.data for C library interop
- vtl linear algebra is VSL-backed: matmul, solve, QR, LU, Cholesky, SVD, pinv
- vstats is a dependency-free Linear Algebra, Statistics, and ML library written from scratch in V
- vsl.fft provides real and complex Fast Fourier Transform with multiple backend options
- ML beta scope in VTL covers tensors, autograd, layers, losses, optimizers, datasets, and CPU training

## Concepts
- V language scientific computing
- VSL library
- vtl tensor library
- autograd reverse-mode AD
- neural network layers Conv2D LSTM Attention
- CUDA Vulkan GPU training
- machine learning algorithms K-means SVM random forest
- linear algebra QR LU Cholesky SVD

## Files
- `https://github.com/vlang/vsl`
- `https://github.com/vlang/awesome-v`
- `https://vlang.github.io/vtl/vtl.html`
- `https://vlang.io/`

_Importance: 5 · Confidence: 1_
