import React from 'react';
import { useGrid, GridOptions } from '../hooks/useGrid';

export const Grid: React.FC<GridOptions> = (props) => {
  useGrid(props);
  return null;
};
