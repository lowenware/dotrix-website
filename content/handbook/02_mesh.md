---
title: Meshes
---

Dotrix provides flexible API to work with your meshes. The API
is implemented in the standalone crate called [`dotrix-mesh`]. One of
data structures it contains can be referenced by [`dotrix::Mesh`] in
your code.

## Vertex Attributes

Each Mesh in Dotrix consists of vertex attributes and optional
indices. The [`dotrix::Mesh`] structure can store any set of
vertex attributes and performs some neccessary validations of
attributes format and number.

Once you set for a mesh some values of the specific vertex attribute,
the number of verticies will be set automatically and each further
set of attributes should be provided for the same amount of vertices.

Dotrix uses native Rust data types to identify vertex attribute. For
example, following code creates a new mesh with positions:

```
let mesh = dotrix::Mesh::new("My Mesh")
    .set_vertices<dotrix::vertex::Position>(vec![
      [-1.0, 0.0, -1.0],
      [1.0, 0.0, -1.0],
      [-1.0, 0.0, 1.0],
      [1.0, 0.0, 1.0],
    ]);
```

More attributes can be added by more calls of `.set_vertices` method:

```
let mesh = dotrix::Mesh::new("My Mesh")
    .set_vertices<dotrix::vertex::Position>(vec![
      [-1.0, 0.0, -1.0],
      [1.0, 0.0, -1.0],
      [-1.0, 0.0, 1.0],
      [1.0, 0.0, 1.0],
    ])
    .set_vertices<dotrix::Color>(vec![
      [1.0, 0.0, 0.0, 1.0],
      [0.0, 1.0, 0.0, 1.0],
      [0.0, 0.0, 1.0, 1.0],
      [1.0, 1.0, 0.0, 1.0],
    ]);
```

To use custom data type as a vertex attribute, you must implement
[`dotrix::vertex::Attribute`] trait for that type:

```
pub struct Position {
    pub value: Vec3,
}

impl dotrix::vertex::Attribute for Position {
    type Raw = [f32; 3];
    fn name() -> &'static str {
        "Position"
    }
    fn format() -> AttributeFormat {
        AttributeFormat::Float32x3
    }
}
```

Refer API reference for [`dotrix::vertex`] for more information
about built-in vertex attributes and attribute formats.

## Getting Data for Buffers

The [`dotrix::Mesh`] object can generate data for GPU buffers in
different layouts. The only important condition is that the object
must really contain data selected for layout.

To get data simply call `.buffer` method with desired layout defined
by type parameter:

```
  if let Some(data) = mesh.buffer::<Position, Color>() {
    // store data in GPU buffer
  }
```

## Mesh Generators

The [`dotrix::Mesh`] implements several constructors. Some of them
returns meshes for primitives:

```
  let cube = dotrix::Mesh::cube(...);
  let cylinder = dotrix::Mesh::cylinder(...);
  let sphere = dotrix::Mesh::sphere(...);
  let cone = dotrix::Mesh::cone(...);
  let torus = dotrix::Mesh::torus(...);
```

Refer API reference for [`dotrix::Mesh`] for more information
about mesh generators.
