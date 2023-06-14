import React,{ useState } from 'react'
import { PlacementGridProps } from '../../../interfaces/coach-interfaces';
import './styles/PlacementGrid.css'

const PlacementGrid:React.FC<PlacementGridProps> = ({width, height}) => {

  return(
    <canvas id='placement-grid' width={width} height={height}>
    </canvas>
  )
};

export default PlacementGrid