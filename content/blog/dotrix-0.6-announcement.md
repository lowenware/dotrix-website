---
title: Dotrix 0.6 Announcement
date: 2022-05-31T17:41:00
image: dotrix-0.6-announcement.png
tags: announcement
summary: Introducing tasks and GPU driven rendering
---

Following the ECS concept we’ve implemented the engine in a way that
whole logic was concentrated in systems. Even rendering was
ECS-driven. The concept paid off, but it had several downsides.
First of all, it was not well optimised and performant. Secondly,
it was not pure ECS, because it was mixed with shared global data.
The upcoming release will solve both issues.

## Introducing Tasks

New tasks will replace current systems implementation. Tasks will
require implementation of a simple trait providing **parallelised**
execution of complex graphs. Customizable contexts of tasks, can be
dependent on shared data, application states or data provided by
other tasks. Built-in scheduler will do the rest of optimizations
and safety controls.

![Dotrix Tasks](/blog/dotrix-0.6-announcement/dotrix-tasks.png)

## Systems Upgrade

New systems will follow a pure ECS pattern. In Rust terms each system
will be a closure executed for a query to one or several entities.

## GPU Driven Rendering

Another big update that is scheduled to be a part of 0.6 release, is
a GPU driven rendering using huge GPU buffers and indirect draw
calls. The goal of this change is to decrease the number of round
trips between CPU and GPU. In other words, Dotrix 0.6 will be able
to render lots of entities in a couple of draw calls.
