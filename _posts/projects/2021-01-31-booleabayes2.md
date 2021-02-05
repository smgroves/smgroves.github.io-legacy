---
layout: page-fullwidth
breadcrumb: true

subheadline:  "Contributions to Science"
title:  "BooleaBayes Part 2: Network Structure and Dynamics"
teaser: "This post takes a look what information we will need to gather in order to understand how cell identity is controlled."
categories:
    - projects
tags:
    - projects
    - code
    - networks
    - contributions
    - booleabayes
header:
    image_fullwidth: "header_11.jpg"
permalink: "/projects/booleabayes/2/"
---


In the first post, we took a look at why we might care about a gene regulatory network, or GRN. This post will focus on learning network structure and network dynamics.

Every network has a specific structure, determined by its combination of nodes (also known as vertices, objects, and in this case transcription factors) and edges (or connections, interactions, or effects). For the network we care about (proteins regulating genes to control cell indentity), we have a *directed network*, where the edges have arrows. In our network, we'll use a single node to represent both the *RNA form* and *protein form* of a specific gene. In other words, an incoming edge to some node X will represent a transcription factor *protein* binding to the promoter region of the X *gene*, and an outgoing edge will represent the X *protein* binding to the promoter of another *gene.*


<figure>
 <img src="{{ site.urlimg }}simple_network.jpg" >
  
</figure>


Often, researchers really only care about the structure of the network itself and can gain a lot of information from it. For example,  <a href="https://en.wikipedia.org/wiki/Network_controllability#:~:text=Network%20Controllability%20is%20concerned%20about,our%20intuitive%20notion%20of%20control.">*structural controllability* </a> is concerned with the connections between nodes in the network, and how some sets of inputs are able to guide the network from any initial state to a specific, desired final state. Also, when we know which transcription factors affect others, we can look for *motifs* in the network, which are small patterns that tell us something about how the network will behave. *Feedback loops,* for example, are a common point of interest for researchers because they can drive changes in the network. A positive feedback loop is one that tends to amplify some signal, such as in blood clotting, where platelets release clotting factors that cause more platelets to aggregate at the site of injury, releasing even more factors, and so on. A negative feedback loop is one that tends to induce an opposite effect, like a thermostat regulating room temperature by comparing the actual temperature to the set temperature and adjusting (decreasing if the actual temperature is high, and vice versa). Negative feedback loops are very common in biology, as most of life functions within a relatively small range of environmental conditions (like temperature). 

You might be familiar with network structure from other disciplines, such as social networks, economic networks, Google's network of webpages, networks of airports, or even food chains and networks. In all of these cases, there will be some components with many more connections and interactions than average,<sup>*</sup> such as Atlanta's large international airport. In the case of airports, we might call these "hubs;" in systems biology, we call this idea "centrality." From only the structure of a gene regulatory network, we can tell which transcription factors play the biggest roles in regulation, which participate in feedback loops, and which need to be controlled to control the entire network.

When I teach graduate students about networks in a Cancer Systems Biology course I TA, we usually start with these more familiar types of networks before getting into the specifics of network dynamics. I find it helpful to keep these analogies in mind, and I'll continue to use social networks as an example. Specifically, we will be focusing on a type of network called a Boolean network, where each node in the network can only have one of two states: ON or OFF. 

To think about this, let's look at a little puzzle. In terms of social networks, we can think of each node as a person, the ON state as "going to a party," and the OFF state as "not going to a party." We'll assume that peer pressure is strong, and each person in this social network decides to go to the party entirely based on the decisions of their friends or more popular kids at their school. They each start with a desire to go to the party or not (*initial condition*), but can very easily (*deterministically*) be swayed by their friends. So, who ends up going to the party, based on the "rules" and interactions below? 

<figure>
 <img src="{{ site.urlimg }}network.jpg" >
  <figcaption>Who goes to the party? Edges represent friendships, and each node is one person (First letter of name labels the node). Do different "initial conditions" change who ends up going?</figcaption>
</figure>








<sup>*</sup> An interesting (yet somewhat debated) fact about biological networks is that they tend to be <a href="https://www.futurelearn.com/info/courses/complexity-and-uncertainty/0/steps/1855">"scale-free."</a> Scale-invariance is a property meaning that the underlying structure of the network doesn't change as the network grows. In scale-free networks, you will find that the distribution of edges connected to each node follows a power-law distribution. In simpler terms, this means that are there many nodes with only a few connections, and few nodes with many connections. This is true of airports (Atlanta is one of those few highly-connected nodes) and social networks (there are usually a few well-connected people), but also critical in biological networks where a few nodes have much more control than average. A great visualization of this can be found <a href="https://en.wikipedia.org/wiki/Scale_invariance"> here. </a> Centrality notions like scale-invariance can also have some interesting side effects, like the fact that <a href="https://en.wikipedia.org/wiki/Friendship_paradox#:~:text=The%20friendship%20paradox%20is%20the,in%20one's%20own%20friend%20group."> on average, most people have fewer friends than their friends have.</a>


{% include list-posts tag='booleabayes' %}
