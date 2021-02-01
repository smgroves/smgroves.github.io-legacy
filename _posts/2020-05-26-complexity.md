---
layout: page
subheadline:  "Blog Post - May 26, 2020"
title:  "What is Complexity?"
teaser: "Cancer acts as a complex system for some of the same reasons ant colonies do: tumors are made up of single cells, which are made up of relatively simpler components (proteins, DNA, RNA), which, at their heart, are just made up of chemicals, and yet the tumor system as a whole is able to devastate the human body."
categories:
    - blog
tags:
    - complexity
    - impact
header:
    image_fullwidth: "header_8.jpg"
permalink: "/blog/complexity/"
---

<!--more-->

What is complexity? This is the question we start with each spring semester for the Introduction to Cancer Systems Biology course I teach at Vanderbilt. We usually ask the students to come up with examples of what they think qualify as complex systems. Because it is a class focused on cancer, someone usually pipes up with just that response: a tumor, an organ, or even an entire human begin, can be thought of as a complex system. Someone usually thinks of the weather—maybe because they’ve heard before that weather is chaotic, or something about a butterfly effect. Sometimes someone will mix up “complex” with “complicated” systems, and, to be fair, these words generally mean the same thing except in the context of systems biology. (Complex systems are what I will describe below. Complicated systems are, well, just hard problems.)

There are a few different vague definitions of complexity itself, but I think it is much more helpful to think of complex systems to get an idea for some characteristics of complexity based on real life examples. A good one to start with is ants.

How simple is an ant? When you consider one ant on its own, it really can’t do much. As Nigel Franks, an ant researcher, has said, “if 100 army ants are placed on a flat surface, they will walk around and around in never decreasing circles until they die of exhaustion.” Generally, we don’t think of ants as having much capacity for consciousness, and so they act almost like little automatons with very simple rules. In systems biology, we might call each ant an “agent.” Ants will interact with their environments according to some instinctual rules; they will act to reduce their hunger by finding food, for example. And when they come across other ants, they might follow their trails of pheromones, laying down their own chemical signals to attract other ants as well. This is why ants often crawl in lines, following each other to search for food.

None of these behaviors on their own are particularly complex. Even some of the simplest life forms on earth can communicate by sending out or receiving signals and reacting appropriately. What makes a system of ants really special—which you’ll know if you ever had an ant farm growing up or have watched them build an anthill— is that when you get a large number of ants together, they can create some pretty complex structures. Without any kind of centralized control (like a CEO ant directing the other ants where to go), an ant colony can work together cooperatively to accomplish very complex tasks, each working off a basic, simplistic set of rules for interacting with their environment. We call this a decentralized, self-organizing system. A complex act—building a tunnel, for example—is accomplished using very simple components—autonomous agents reacting to their environments.

The important thing to remember here is that you can’t understand the complex behavior by considering a single ant, because the whole is more than the sum of its parts. This is called emergent behavior, and includes self-organization in the case of ants, but also might include information processing (such as single neurons firing in the brain to create a complex network of interactions that can process information), evolution, and learning. This is what systems biology is all about—understanding how emergent behaviors can arise out of relatively simple components. Rather than using reductionism to investigate each part (which, of course, also has its place in science), systems biology aims to figure out how to build up those parts to make something. For example, reductionist biology is like taking a car apart to understand each piece. Systems biology is like trying build a car that will run, given relatively simple components.

Cancer acts as a complex system for some of the same reasons ant colonies do: tumors are made up of single cells, which are made up of relatively simpler components (proteins, DNA, RNA), which, at their heart, are just made up of chemicals, and yet the tumor system as a whole is able to devastate the human body. How can organized chemicals—carbon, oxygen, hydrogen, the works—create something without centralized control to kill a human? We can try to understand what each of the cells in the tumor and the surrounding microenvironment are doing, but we also need to understand how they communicate and interact (and how the components of cells communicate and interact) to form emergent behaviors such as self-organization and evolution. Often, systems biologists like to think of these interactions between components as networks, much like a network of people on Facebook or Twitter. But what makes some of these systems complex (whole greater than the sum of its parts), while others are simply hard problems to solve? Remember, a bunch of components don’t necessarily make a complex system with emergent behaviors—for example, if you’re trying to figure out where a golf ball will land based on the terrain, the way the golfer hits the ball, the wind that day, etc., you have a lot to consider, but it’s just a hard physics problem, not really a complex system.

One other example I like to use to explain complex systems, and specifically why we need mathematical modeling to understand them, is Conway’s Game of Life. There is a well fleshed out Wikipedia article on this, so I won’t go into too much detail here. The concept of this game, devised by mathematician John Horton Conway in 1970, is very simple: little “cells” or automatons (agents acting according their own set of rules, without centralized control) evolve in a way that depends only on where they begin in a grid of indeterminate size. For example, let’s start like this:

<img src="{{ site.urlimg }}complexity1.jpg" alt="">

Any live cell with fewer than two live neighbors dies, as if by underpopulation.Each black square is a cell that acts according to these simple rules regarding its interactions with its 8 neighboring cells (including corners):

Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by overpopulation.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
So in the next iteration of our game above, some of the cells will “die” due to underpopulation (red cells), and some new cells will spring up where they touch three live neighbors (grey):

<img src="{{ site.urlimg }}complexity2.jpg" alt="">

That’s all there is to it. You can continue the game we have above, and eventually you’ll get to a point where the cells won’t change any more (steady state equilibrium), or where they flicker through a cycle of the same few states (usually between 2 states, but sometimes more—this is a cyclical equilibrium). Can you guess how the game above will end?

The rules are simple, the agents are simple, and yet… there is no way to figure out how the game will end except by actually going step by step. There’s no equation or shortcut that will tell you how the game will end, given any starting conditions. Of course, over time, we’ve learned some of the possible ending configurations, some of which are detailed in <a href='https://www.theguardian.com/science/alexs-adventures-in-numberland/2014/dec/15/the-game-of-life-a-beginners-guide
'>this article</a>.

But if your starting point is even one cell different than the example configurations above, it could completely change the ending point. This tiny change leading to a very different outcome is an example of a chaotic system, which is why it’s so hard to predict what will happen. For example, in a chaotic weather system (read: any weather system), even if we can measure conditions today with an error as small as say 0.00001% (which is exceptional), we still won’t know what’s going to happen ten days down the line. Bettering weather prediction is not really a matter of getting more confident in measuring what we know today; the unpredictability of weather is a behavior of the chaotic system.

The important thing here is that we can’t figure out what is going to happen, in the Game of Life or in weather, without actually… well, watching it happen. But what good is a prediction if you can only make it in real time (cue Karen Smith’s weather report*)? We need a way to “speed up” what’s going to happen: to use the starting conditions, run through the scenario faster than we are in real life, and figure out, with some degree of certainty, what will happen in real life. For the Game of Life, this is simple: just follow the rules and step though each iteration until it stops moving (or ends in a cyclical pattern). Since the Game of Life isn’t actually evolving over real time, it doesn’t matter how fast or slow this “simulation” is. With weather, we would theoretically like to use today’s conditions (and maybe a few from the recent past, or the same day last year, etc.) to predict, right now, what will happen a week from now. The way we do this is to again “simulate:” run through the “rules” of the system to see where we will be in 7 days, in faster than 7 days (again, if it takes you a week to predict what will happen, that’s not a prediction). We do this using computers, and mathematical models that put the rules of the complex system into a relatively simple, coherent “language” (i.e. math speak) and then simulate to see what happens. Just like in experimental biology, where a “model” might mean a mouse—a somewhat simpler substitute for the real thing that we can gain insights from—a mathematical model is a simpler, faster substitute for what is evolving in real life. No model is perfectly “correct”—just like a tumor in a mouse is not the same thing as a tumor in a human. But some models are useful, and we can gain valuable insights into how tumors grow, evolve, and evade treatment, and maybe, just maybe, figure out how to beat them.

*if you know, you know.

https://quarantalab.com/what-is-complexity/
