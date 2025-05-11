import { createContext, useContext } from 'react';
import { Canvas } from 'fabric-layers';

export const CanvasContext = createContext<Canvas | null>(null);

export const useCanvas = () => {
  const canvas = useContext(CanvasContext);
  if (!canvas) {
    throw new Error('useCanvas must be used within a Canvas component');
  }
  return canvas;
};
