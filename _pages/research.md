---
title: "Research"
permalink: /research/
author_profile: true
redirect_from: 
  - /research/
  - /research.html
---

## Adjusting Model Size in Continual Gaussian Processes: How big is big enough?

TL;DR: We propose a method to adjust the model size of a Gaussian Process in a continual learning setting.

![Dynamic Model Adjustment](assets/images/animated_batches.gif)

Figure: Three continual learning scenarios with different capacity requirements. Top: 1) a growing input space 2) i.i.d. samples from a uniform distributions, and 3) narrow-range samples with occasional outliers. Bottom: Number of inducing points selected using the VIPS algorithm at each batch. We observed: 1) a linear increase, 2) after initial training, we see a halt in growth, and 3) low model size until it encounters outliers.

[Link to the paper](https://arxiv.org/abs/2106.05294)
