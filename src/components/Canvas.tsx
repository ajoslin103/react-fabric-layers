import React, { useEffect, useRef } from 'react';
import { Canvas as FabricCanvas } from 'fabric-layers';
import { CanvasContext } from '../context/CanvasContext';

export interface CanvasProps {
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  backgroundColor?: string;
  onReady?: (canvas: FabricCanvas) => void;
  children?: React.ReactNode;
}

export const Canvas: React.FC<CanvasProps> = ({
  width,
  height,
  className,
  style,
  backgroundColor,
  onReady,
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasInstanceRef = useRef<FabricCanvas | null>(null);

  useEffect(() => {
    if (canvasRef.current && !canvasInstanceRef.current) {
      const canvas = new FabricCanvas(canvasRef.current, {
        width,
        height,
        backgroundColor,
      });
      
      canvasInstanceRef.current = canvas;
      onReady?.(canvas);
    }

    return () => {
      canvasInstanceRef.current?.destroy();
      canvasInstanceRef.current = null;
    };
  }, []);

  return (
    <CanvasContext.Provider value={canvasInstanceRef.current}>
      <div className={className} style={style}>
        <canvas ref={canvasRef} />
        {children}
      </div>
    </CanvasContext.Provider>
  );
};
