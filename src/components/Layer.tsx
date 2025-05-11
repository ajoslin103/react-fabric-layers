import React, { useEffect } from 'react';
import { useLayer } from '../hooks/useLayer';

export interface LayerProps {
  id: string;
  visible?: boolean;
  children?: React.ReactNode;
}

export const Layer: React.FC<LayerProps> = ({ id, visible = true, children }) => {
  const { setVisibility } = useLayer({ id });

  useEffect(() => {
    setVisibility(visible);
  }, [visible, setVisibility]);

  return <>{children}</>;
};
