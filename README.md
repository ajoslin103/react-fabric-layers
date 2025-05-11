# react-fabric-layers

React components and hooks for fabric-layers - a powerful canvas layer management system built on Fabric.js

## Installation

```bash
npm install react-fabric-layers fabric-layers fabric-pure-browser
# or
yarn add react-fabric-layers fabric-layers fabric-pure-browser
```

## Usage

```jsx
import { Canvas, Grid, Layer } from 'react-fabric-layers';

function App() {
  return (
    <Canvas width={800} height={600}>
      <Grid size={50} color="#cccccc" opacity={0.5} />
      <Layer id="shapes">
        {/* Your Fabric.js objects will be rendered here */}
      </Layer>
    </Canvas>
  );
}
```

## Components

### Canvas
The main container component that initializes the Fabric.js canvas.

### Grid
A customizable grid overlay component.

### Layer
A container for organizing Fabric.js objects.

## Hooks

### useCanvas
Access the Fabric.js canvas instance.

### useLayer
Manage objects within a layer.

### useGrid
Control grid appearance and behavior.

## License

MIT
