---
layout: page-fullwidth
breadcrumb: true

subheadline:  "Contributions to Science"
title:  "BooleaBayes Part 3: Using data to build a gene regulatory network for Small Cell Lung Cancer"
teaser: "We begin to look at how BooleaBayes, the computational tool developed in the Quaranta lab by David Wooten, PhD and me, can be applied to Small Cell Lung Cancer Data."
categories:
    - projects
tags:
    - projects
    - code
    - networks
    - contributions
    - booleabayes
header:
    image_fullwidth: "header_12.jpg"
permalink: "/projects/booleabayes/3/"
---

We've talked about why we care about transcription factor networks. We've talked about what the structure and rules of a network might look like. In this post, we'll talk a little more specifically about how we can use high-dimensional data from sequencing experiments to determine the structure and rules of a network.

In the last post, in the party puzzle, I gave you rules for each person-- how they decide whether or not they want to go to the party. But how do we figure out what these rules should be, if we don't know them ahead of time? 

In terms of the party puzzle, we might have a scenario like this:
1. There have been quite a few parties in the past, and attendees were recorded each time ("samples").
2. Each person always used the same "rule" to decide whether they will go or not-- the rule is considered <i>time invariant</i>.
3. We want to figure out these rules for each person, even though we <b>only</b> know who went to each party.

This is a really hard problem, and could be considered a problem of <i>reverse engineering</i>. In fact, it's hard enough that it would be difficult for me to even come up with a list of "past party attendees" (samples) that would allow you to find a unique set of rules for everyone.

What would make this problem easier? 

Maybe we could use our knowledge of who's friends with who (and who's enemies with who) to make an educated guess about what influences each person's decisions. For example, if we know that Carrie is good friends with Daniel, we might assume that Carrie will base her decision on whether or not Daniel decides to go (this is, in fact, her rule). This is called "prior knowledge," or often in biology, "expert knowledge." Expert knowledge is often how we come up with the connections in a transcription factor network.

Gene regulatory networks (or transcription factor networks) can be made for an abundance of biological systems, including cancer. I focus on Small Cell Lung Cancer, which is an extremely deadly form of lung cancer. While SCLC patients make up only 15% of lung cancer patients, the five-year survival rate is around 6% (compared to ~25% for other types of lung cancer). 

Just like we talked about in the first post, Small Cell Lung Cancer cells can easily change their cell identity. Sort of like a deranged differentiation, SCLC cells can change cell types according to what functions they need to optimize. Early on, it seems like cells start in a proliferative cell type that can grow the tumor quickly. In later stages, some cells can change to a cell type that is good at migrating to other places in the body, thereby seeding metastases in places like the lymph nodes and brain. Interestingly, we think this is how cells are able to avoid death from chemotherapy; some of the cells die from chemo (and the tumor will shrink), but we think some change their cell identity and evade the treatment, allowing the tumor to eventually regrow. 

> If we can understand and control how cells change their identity, we may be able to develop more effective treatments for this deadly cancer.

We already talked about what we need to learn to figure this out: how is the transcription factor network controlling these changes in cell identity?

To answer this question, we developed a tool called BooleaBayes-- an algorithm that can take in data and reverse engineer the rules of the network controlling that data. Just like in the party scenario, we first would like to figure out the structure of the network, which we do using expert knowledge. There's a really cool type of experiment that can figure out what proteins (transcription factors) are binding to what pieces of DNA (genes). It's called ChIP-seq, and essentially the method uses a cool trick to "tie together" any proteins that are bound to DNA (normally these proteins will bind and fall off the DNA pretty quickly). The scientist then "shakes up" the DNA to break it into little pieces, and pulls out the pieces of DNA with the specific transcription factor of interest bound to them. Once these pieces of DNA are sequenced, the scientist can figure out which genes are controlled by that transcription factor. This is akin to determining the edges in the network: which genes affect other genes?

Lucky for us, many of these experiments' results have been compiled into databases, so we looked at the databases to come up with a network connecting transcription factors we know are important in SCLC. 

So we have a good idea of which proteins are affecting other genes. But <b>how</b>? For example, we might know that proteins A, B, and C affect gene D, but the rule could be many different things:

- D expression = A and B and C
- D = A or B or C
- D = A and B and not C
...

To determine which one is the right rule, we need some data.


{% include list-posts tag='booleabayes' %}
