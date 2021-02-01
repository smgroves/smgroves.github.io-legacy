---
layout: page-fullwidth
breadcrumb: true

subheadline:  "Contributions to Science"
title:  "BooleaBayes"
teaser: "This analysis was written to analyze transcription factor networks for Small Cell Lung Cancer phenotypes. I've written a primer on gene regulatory network dynamics and how our computational tool is able to define them and make predictions about the future using gene expression data-- RNA sequencing data that tells you the identity of a population of cells."
categories:
    - projects
tags:
    - projects
    - code
    - networks
    - contributions
header:
    image_fullwidth: "header_11.jpg"
permalink: "/projects/booleabayes/"
---

Have you ever thought about how different cells in your body came to be? You may have heard that you have a particular *genome* that is shared by virtually all of your cells. So why does, for example, a heart cell act so differently from a lung cell? How does a cell located in your heart learn to "turn on" heart cell functions, and "turn off" lung cell functions? And if you took that heart cell and moved it to the lung, would it be able to change its function and start acting like a lung cell?

These are all questions of cell identity. Cell identity can be defined in many different ways, but generally we think of a cell’s identity as the array of functioning proteins that cause a cell to have specific behaviors, whether that is in terms of interaction with other cells, functions in the body, or in response to external signals and perturbations. For example, the figure below shows a variety of cell types that exist within the lung, all of which have distinct functions, such as moving air and particles through the trachea (ciliated cells), cells that produce surfactant to protect the lung epithelium (club cells), or cells that assist in lung development and recovery after injury (Pulmonary Neurendocrine Cells, or PNECs).

<figure>
 <img src="{{ site.urlimg }}lungcells.jpg" >
  <figcaption>Wagner et al., 2016.</figcaption>
</figure>

Al of these cells likely have the same genome, or specific patterns of DNA, if they come from the same (healthy) person. But they have different *phenotypes* and *proteomes* (amounts of an array of proteins in each cell), which can be driven by non-genetic processes at the *transcriptomic*, or RNA expression, level. So a cell’s identity– distinguished by its behaviors– is governed by the expression of genes required for certain functions. 

<figure>
 <img src="{{ site.urlimg }}dogma.jpg" >
  <figcaption>Like an old-school printing press, DNA is a template that can be used to make many copies of messenger RNA, or mRNA. These RNA copies then get translated into proteins, which are the cellular machines that allow cells to function in different ways. The number of copies of RNA made from the DNA depends on many things, one of which is other proteins whose function is to decide how much DNA is transcribed. These proteins are called transcription factors.</figcaption>
</figure>

Often the control of gene expression, or transcriptional regulation, is ascribed to networks of transcription factors that affect the level of gene expression (amount of that gene's RNA) in each cell. For example, the image below is showing three different TFs (two activators and one repressor), and when they TFs bind to their targeted regions of DNA, they affect how much of the target gene is transcribed and therefore how much of that protein is made. 

<figure>
 <img src="{{ site.urlimg }}tfs.jpg" >
  <figcaption></figcaption>
</figure>

These TFs do not work independently, but instead can be placed in a network that we call a gene regulatory network (GRN). Sets of interacting transcription factors (TFs) can “drive” cells towards a specific “identity” through concerted activities. GRNs can exist in multiple states and their dynamics can explain the coexistence of multiple stable cell types even within an isogenic (same genome) population. These dynamics also give cells the plasticity they need to undergo epigenetic changes necessary for response to perturbations and external signals. For example, in response to an external signal, the dynamics of the network shown here may cause the green gene expression to increase and the blue to decrease until the cell’s expression profile reaches a stable point. These dynamics of gene expression are how a cell might change its phenotype– for example, from a lung basal cell to a club cell.

<figure>
 <img src="{{ site.urlimg }}grn.jpg" >
  <figcaption>Transcription factors form a network, and the network changes over time, causing expression of genes to change over time. This is how a cell may change its identity from a basal cell, expressing the <i>blue</i> gene, to a club cell, expressing <i>green</i>.</figcaption>
</figure>

Because this single network under different conditions can produce varying phenotypes, we say that the network is capable of explaining the multi-stability of cell phenotypes that share a single genome. 

A very helpful (albeit limited) visualization tool for thinking about multiple stable cell types is a phenotypic landscape. If you have not heard of a phenotypic landscape before, it is an idea that was first proposed by a guy named [Waddington][1] to describe how cells differentiate from one cell type to another without necessarily changing their genome. You may be very unlikely to see a heart cell turn into a lung cell, but these types of changes in cell identity happen all the time in differentiation: a stem cell turns into more specialized cell types with specific functions. Waddington proposed that differentiation was like a ball rolling down a hill and falling into basins at the bottom of the hill that represent different steady states, or cell types. Here, we’re showing just one dimension of the landscape across the x axis, but you can think of each point on the x axis as a different cell type, and the y axis is the stability of that cell type. Similar to a ball rolling down a hill, if we place a cell someone on this landscape that is not in a basin, it will roll down into a nearby basin until it comes to a stop. 

<figure>
 <img src="{{ site.urlimg }}landscape.jpg" >
  <figcaption>The network will eventually "calm down" until it reaches an equilibrium, like a thermostat (a very simple network) that eventually shuts off the AC when it reaches the right temperature. These steady states are the stable "attractors" of the network, and can be represented by valleys in a landscape. States higher in the landscape will continue to change until they eventually reach an attractor. </figcaption>
</figure>

Where these cells stop are called attractor states in the network, and these correspond to stable cell phenotypes we would see empirically, such as the basal and club cells we saw before. Importantly, attractor states are self-stabilizing, which means that if you perturb a cell by moving it a small distance from the attractor, it will roll back to its original starting place. We therefore think of the stability of each attractor as the depth and relative size of the basin of attraction surrounding it.  Often this stability comes from feedback loops in the underlying network of interactions. 



[1]: https://archive.org/details/in.ernet.dli.2015.547782/page/n1/mode/2up

*adapted from my talk on Network Control of Phenotypic plasticity in Cancer."