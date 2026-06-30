---
layout: page
permalink: /research/
title: research
author_profile: true
nav: true
nav_order: 3
show_page_title: false
---

<!-- markdownlint-disable MD033 -->
<div style="text-align: center; margin-top: 20px;">
  <h2>
    Adjusting Model Size in Continual Gaussian Processes:<br>
    How Big is Big Enough?
  </h2>
</div>

<div style="text-align: center; margin-top: 10px; font-size: 1.05em; color: #333;">
  Pescador-Barrios, G., Filippi, S., and van der Wilk, M.<br>
  ICML 2025. Spotlight.
</div>

<div style="text-align: center; margin-top: 20px; font-size: 1.1em;">
  We propose a method to dynamically adjust the model size of a Gaussian Process during training in a continual learning setting.
</div>

<div style="text-align: center; margin-top: 20px;">
  <a href="https://arxiv.org/pdf/2408.07588" class="btn" style="text-decoration: none; padding: 10px 20px; background-color: #007BFF; color: white; border-radius: 5px; font-weight: bold;">
    Read the Paper
  </a>
</div>

<div style="text-align: center; margin-top: 30px;">
  <img src="{{ '/assets/img/animated_batches.gif' | relative_url }}" alt="Dynamic Model Size" style="max-width: 80%; border: 1px solid #ddd; border-radius: 10px; padding: 10px;">
  <p style="margin-top: 10px; font-size: 0.9em; color: #555;">
    Figure: Three continual learning scenarios. The model size is adjusted during training to match the capacity requirements of each task.
  </p>
</div>

<hr style="margin: 40px auto; width: 60%; border: 0; border-top: 1px solid #ddd;">

<div style="text-align: center; margin-top: 20px;">
  <h2>
    A Bayesian Nonparametric View on Adapting Neuron Count During Training
  </h2>
</div>

<div style="text-align: center; margin-top: 10px; font-size: 1.05em; color: #333;">
  Pescador-Barrios, G., van der Ouderaa, T., Nockels-Stewart, O.J., Filippi, S., and van der Wilk, M.<br>
</div>

<div style="text-align: center; margin-top: 20px;">
  <span class="btn" style="display: inline-block; text-decoration: none; padding: 10px 20px; background-color: #007BFF; color: white; border-radius: 5px; font-weight: bold; cursor: default;">
    Soon on arXiv
  </span>
</div>

<div style="text-align: center; margin-top: 20px; font-size: 1.1em;">
  We argue that selecting inductive bias and model size are inextricably linked, and that automatic model selection procedures should solve both problems jointly.
</div>

<div style="text-align: center; margin-top: 30px;">
  <img src="{{ '/assets/img/animated_batches.gif' | relative_url }}" alt="Model size and objective progression" style="max-width: 80%; border: 1px solid #ddd; border-radius: 10px; padding: 10px;">
  <p style="margin-top: 10px; font-size: 0.9em; color: #555;">
    Figure: Model predictions, ELBO, and neuron count evolve together during training, with growth and pruning as periodic structure is learned.
  </p>
</div>
<!-- markdownlint-enable MD033 -->

