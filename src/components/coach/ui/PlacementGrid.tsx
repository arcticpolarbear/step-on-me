import React,{ useEffect, useRef } from 'react'
import { PlacementGridProps } from '../../../interfaces/coach-interfaces';
import './styles/PlacementGrid.css'

const PlacementGrid:React.FC<PlacementGridProps> = ({width, height}) => {

  useEffect(() => {
    const canvas = document.getElementById('placement-grid') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    
    function drawGrid(ctx: any) {
      for (var x=0;x<=width;x+=50) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height)
        //ctx.strokeStyle = 'rgb(255,0,0)';
        //ctx.lineWidth = 1;
        ctx.stroke(); 
        ctx.beginPath(); 
      }
      for (var y=0;y<=height;y+=50) {
              ctx.moveTo(0, y);
              ctx.lineTo(width, y);
      }
      //ctx.strokeStyle = 'rgb(20,20,20)';
      ctx.lineWidth = 5;
      ctx.stroke(); 
    }

    drawGrid(ctx);
  },[])

  return(
    <canvas id='placement-grid' width={width} height={height}>
    </canvas>
  )
};

export default PlacementGrid