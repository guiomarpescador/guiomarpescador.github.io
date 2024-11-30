---
title: "Research"
permalink: /research/
author_profile: true
---

## Adjusting Model Size in Continual Gaussian Processes: \\ How Big is Big Enough?

 We propose a method to adjust the model size of a Gaussian Process during training in a continual learning setting.
 
[Link to the paper](https://arxiv.org/pdf/2408.07588)

![Dynamic Model Size](/images/animated_batches.gif)

Figure: Three continual learning scenarios with different capacity requirements. Top: 1) a growing input space 2) i.i.d. samples from a uniform distributions, and 3) narrow-range samples with occasional outliers. Bottom: Number of inducing points selected using the VIPS algorithm at each batch. We observed: 1) a linear increase, 2) after initial training, we see a halt in growth, and 3) low model size until it encounters outliers.

