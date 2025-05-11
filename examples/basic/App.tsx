import React, { useEffect } from 'react';
import { Canvas, Grid, Layer, useCanvas } from '../../src';
import { fabric } from 'fabric-pure-browser';

const ShapesLayer = () => {
  const canvas = useCanvas();

  useEffect(() => {
    // Create a red rectangle
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      width: 50,
      height: 50,
      fill: 'red',
      angle: 45
    });

    // Create a blue circle
    const circle = new fabric.Circle({
      left: 200,
      top: 200,
      radius: 30,
      fill: 'blue'
    });

    // Add shapes to the layer
    canvas.addToLayer('shapes', rect);
    canvas.addToLayer('shapes', circle);

    return () => {
      canvas.clearLayer('shapes');
    };
  }, [canvas]);

  return null;
};

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Fabric Layers Example</h1>
      <Canvas width={800} height={600} style={{ border: '1px solid #ccc' }}>
        <Grid size={50} color="#cccccc" opacity={0.5} />
        <Layer id="shapes">
          <ShapesLayer />
        </Layer>
      </Canvas>
    </div>
  );
}
