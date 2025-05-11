import { useCallback } from 'react';
import { fabric } from 'fabric-pure-browser';
import { useCanvas } from '../context/CanvasContext';

export interface UseLayerOptions {
  id: string;
}

export const useLayer = ({ id }: UseLayerOptions) => {
  const canvas = useCanvas();

  const addObject = useCallback((object: fabric.Object) => {
    canvas.addToLayer(id, object);
  }, [canvas, id]);

  const removeObject = useCallback((object: fabric.Object) => {
    canvas.removeFromLayer(id, object);
  }, [canvas, id]);

  const clearLayer = useCallback(() => {
    canvas.clearLayer(id);
  }, [canvas, id]);

  const setVisibility = useCallback((visible: boolean) => {
    canvas.setLayerVisibility(id, visible);
  }, [canvas, id]);

  return {
    addObject,
    removeObject,
    clearLayer,
    setVisibility
  };
};
