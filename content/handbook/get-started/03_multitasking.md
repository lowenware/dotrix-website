---
title: Multitasking
---

> This document describes features specific for upcoming 0.6 Release

In Dotrix rest of the application logic should be implemented in
tasks. Developer must implement the `Task` trait for some data
structure.

```rust
struct MyTask {
    counter: u64,
}

impl dotrix::Task for MyTask {
    type Context = ();
    type Provides = ();

    fn run(&mut self, ctx: Self::Context) -> Self::Provides {
        // Logic goes here
        self.counter += 1;
    }
}
```

Each task can be dependend on some context and can provide some data,
that can be used by other tasks.

## Context

Each task may access shared context using so called `Selectors`.
Context of a task may be built using different combinations of
selectors. The order of selectors does not matter. Using selectors
you can build complex and effective execution graphs like one bellow.

![Dotrix Tasks](/blog/dotrix-0.6-announcement/dotrix-tasks.png)

### Services selectors

- `Ro<T>` - Read only selector for a service of type `T`

- `Rw<T>` - Read and write selector for a service of type `T`

As soon as services are just a shared data instances with some
associated methods, these selectors only provide access to the data.
The only role they play for task scheduling is declaration of
possibility to run in parallel. For example, two or more tasks
using `Ro<Camera>` in their context can run in parallel, but only
one task dependend on `Rw<Camera>` can run at a time.

The selectors implement `Deref` and `DerefMut` traits appropriately,
so you can access methods and properties defined for enclosured `T`
service on a selector itself.

```rust
impl dotrix::Task for MyTask {
    type Context = (
        Ro<Camera>,
    );
    type Provides = ();

    fn run(&mut self, (camera,): Self::Context) -> Self::Provides {
        println!("ProjView matrix: {:?}", camera.proj_view());
    }
}
```

### Dependencies selectors

- `Any<T>` - Read only selector for data of type `T` provided by
other tasks

- `All<T>` - Read only selector for all instances of type `T`
provided by other tasks

Both selectors provides read only access to data provided by
previously executed tasks, but they have important difference in how
they affect scheduling.

A task with dependency on `Any<Data>` will be executed on each
provision of `Data`. While `All<Data>` will wait until all
provisions of `Data` are availbale. Selector `All<T>` does not
implement `Deref` trait. Instead of this, it provides `.iter()`
method returning an iterator over the data instances.

```rust
impl dotrix::Task for MyTask {
    type Context = (
      Ro<Camera>,
      All<Asset>,
    );
    type Provides = MyScene;

    fn run(&mut self, (camera, assets): Self::Context) -> Self::Provides {
        println!("collected {} assets", assets.count());
        let mut my_scene = MyScene::new();
        for asset in assets.iter() {
            my_scene.add(asset);
        }
        my_scene
    }
}
```

### State selectors

- `State<Ro<T>>` - Read only selector for state of type `T`

- `State<Rw<T>>` - Read and write selector for state of type `T`

State selectors provides access to application state data. While
they affect scheduling in the same way as `Ro<T>` and `Rw<T>`,
they also stick execution of a task to the selected state.

```rust
impl dotrix::Task for MyTask {
    type Context = (
        dotrix::State<dotrix::Ro<MyState>>,
    );
    type Provides = ();

    fn run(&mut self, (state,): Self::Context) -> Self::Provides {
        println!("I run at MyState");
    }
}
```

Both state selectors also provide access to states stack control
methods. If you need to access these methods for a task, that should
run on any state, you can use `()` as a state data, which means
"Any State", for example `State<Ro<()>>`.
