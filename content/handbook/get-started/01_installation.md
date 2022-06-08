---
title: Installation
---

To start working with Dotrix you need to install
[GIT](https://git-scm.com/downloads) and
[Rust toolchain](https://rustup.rs/)
on your computer first. The installation process for both is OS
dependent. Please refer the official documentation for more
information.

## Getting the Code

Before you start writing your own application, you may want to play
with some example applications written using Dotrix and check their
source codes. The best way to do so is to clone the official GIT
repository of Dotrix:

```sh
git clone http://github.com/lowenware/dotrix.git
```

Then navigate to newly created `dotrix` folder:

```sh
cd dotrix
```

And run the following command to compile the Demo application:

```sh
cargo run --release --example demo
```

As a result after the compilation a new window should open.
![Dotrix Demo](/handbook/dotrix-demo.png)

Dotrix is being distributed with plenty of example applications. You
can find a
[complete list](https://github.com/lowenware/dotrix/#examples) as
well as
[source codes](https://github.com/lowenware/dotrix/tree/main/examples)
in the official repository.

Once you are ready, you can start creating your own application!
