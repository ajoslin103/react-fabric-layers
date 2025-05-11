import { useEffect, useCallback } from 'react';
import { fabric } from 'fabric-pure-browser';
import { useCanvas } from '../context/CanvasContext';
import { useLayer } from './useLayer';

export interface GridOptions {
  size?: number;
  color?: string;
  opacity?: number;
  visible?: boolean;
}

export const useGrid = (options: GridOptions = {}) => {
  const canvas = useCanvas();
  const { addObject, clearLayer, setVisibility } = useLayer({ id: 'grid' });

  const createGrid = useCallback(() => {
    const fabricCanvas = canvas.getFabricCanvas();
    const width = fabricCanvas.getWidth();
    const height = fabricCanvas.getHeight();
    const size = options.size || 50;
    const color = options.color || '#cccccc';
    const opacity = options.opacity || 0.5;

    // Create vertical lines
    for (let x = 0; x <= width; x += size) {
      const line = new fabric.Line([x, 0, x, height], {
        stroke: color,
        opacity,
        selectable: false,
        evented: false
      });
      addObject(line);
    }

    // Create horizontal lines
    for (let y = 0; y <= height; y += size) {
      const line = new fabric.Line([0, y, width, y], {
        stroke: color,
        opacity,
        selectable: false,
        evented: false
      });
      addObject(line);
    }
  }, [canvas, options, addObject]);

  useEffect(() => {
    createGrid();
    return () => clearLayer();
  }, [createGrid, clearLayer]);

  return {
    setVisibility
  };
};
