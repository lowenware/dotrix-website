---
title: Get Started
---

Hello, I'm a mdx file!

```rust
use dotrix::camera;
use dotrix::egui::{self, Egui};
use dotrix::input::{ActionMapper, Button, KeyCode, Mapper, Modifiers};
use dotrix::overlay::{self, Overlay};
use dotrix::prelude::*;
use dotrix::renderer::Render;
use dotrix::sky::{skybox, SkyBox};
use dotrix::{Assets, CubeMap, Frame, Input, State, World};

/// In main state you can rotate camera and see FPS counter
struct MainState {
    name: String,
}

/// In paused state you can't rotate camera
struct PauseState {
    name: String,
    handled: bool,
}

fn main() {
    Dotrix::application("Dotrix: Demo Example")
        .with(System::from(startup))
        .with(System::from(ui_main).with(State::off::<PauseState>()))
        .with(System::from(ui_paused).with(State::on::<PauseState>()))
        .with(
            // Camera control should work only in Main state
            System::from(camera::control).with(State::on::<MainState>()),
        )
        .with(overlay::extension)
        .with(egui::extension)
        .with(skybox::extension)
        .run();
}
```