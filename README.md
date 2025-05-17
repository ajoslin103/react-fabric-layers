# react-fabric-layers

React components and hooks for fabric-layers - a powerful canvas layer management system built on Fabric.js. This package provides a seamless integration between React and the fabric-layers library.

## Features

- React components for Canvas, Grid, and Layer management
- Custom hooks for canvas manipulation
- TypeScript support
- Declarative API for Fabric.js operations
- Full integration with fabric-layers functionality

## Installation

```bash
npm install react-fabric-layers fabric-layers fabric-pure-browser
# or
yarn add react-fabric-layers fabric-layers fabric-pure-browser
```

## Basic Usage

```jsx
import { Canvas, Grid, Layer, useCanvas } from 'react-fabric-layers';
import { useCallback } from 'react';

function App() {
  const handleCanvasReady = useCallback((canvas) => {
    console.log('Canvas is ready:', canvas);
  }, []);

  return (
    <Canvas 
      width={800} 
      height={600}
      onReady={handleCanvasReady}
    >
      <Grid 
        size={50} 
        color="#cccccc" 
        opacity={0.5}
        snap={true}
      />
      <Layer 
        id="background"
        name="Background"
        visible={true}
        locked={false}
      >
        <rect 
          width={100} 
          height={100} 
          fill="#e0e0e0"
          left={50}
          top={50}
        />
      </Layer>
      <Layer 
        id="foreground"
        name="Foreground"
      >
        <circle 
          radius={30}
          fill="red"
          left={200}
          top={200}
        />
      </Layer>
    </Canvas>
  );
}
```

## Components API

### Canvas
```typescript
interface CanvasProps {
  width: number;
  height: number;
  onReady?: (canvas: fabric.Canvas) => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
```

### Grid
```typescript
interface GridProps {
  size?: number;          // Grid cell size
  color?: string;         // Grid line color
  opacity?: number;       // Grid opacity (0-1)
  snap?: boolean;         // Enable snap to grid
  majorLines?: boolean;   // Show major grid lines
  majorLineFrequency?: number; // Major line frequency
}
```

### Layer
```typescript
interface LayerProps {
  id: string;             // Unique layer identifier
  name?: string;          // Layer name
  visible?: boolean;      // Layer visibility
  locked?: boolean;       // Layer locked state
  opacity?: number;       // Layer opacity (0-1)
  children?: React.ReactNode;
}
```

## Hooks

### useCanvas
```typescript
function useCanvas(): fabric.Canvas | null;
```
Access the Fabric.js canvas instance from any child component.

### useLayer
```typescript
function useLayer(layerId: string): {
  layer: Layer;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  locked: boolean;
  setLocked: (locked: boolean) => void;
  opacity: number;
  setOpacity: (opacity: number) => void;
  addObject: (object: fabric.Object) => void;
  removeObject: (object: fabric.Object) => void;
};
```

### useGrid
```typescript
function useGrid(): {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  size: number;
  setSize: (size: number) => void;
  snap: boolean;
  setSnap: (snap: boolean) => void;
  opacity: number;
  setOpacity: (opacity: number) => void;
};
```

## Advanced Usage

### Working with Shapes
```jsx
import { Canvas, Layer, useLayer } from 'react-fabric-layers';

function ShapeManager() {
  const { layer, addObject } = useLayer('myLayer');

  const addRect = useCallback(() => {
    const rect = new fabric.Rect({
      width: 100,
      height: 100,
      fill: 'red',
      left: 100,
      top: 100
    });
    addObject(rect);
  }, [addObject]);

  return (
    <button onClick={addRect}>Add Rectangle</button>
  );
}
```

### Canvas Event Handling
```jsx
import { Canvas, useCanvas } from 'react-fabric-layers';

function CanvasEvents() {
  const canvas = useCanvas();

  useEffect(() => {
    if (!canvas) return;

    const handleObjectModified = (e) => {
      console.log('Object modified:', e.target);
    };

    canvas.on('object:modified', handleObjectModified);
    return () => {
      canvas.off('object:modified', handleObjectModified);
    };
  }, [canvas]);

  return null;
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## License

MIT
