import React,{ useEffect, useRef } from 'react'
import { PlacementGridProps, FootLocation } from '../../../interfaces/coach-interfaces';
import './styles/PlacementGrid.css'

const PlacementGrid:React.FC<PlacementGridProps> = ({width, height}) => {
  const canvasRef = useRef(null);
  const draggableObjects: any = useRef([]);
  const selectedObject: any = useRef(null);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = document.getElementById('placement-grid') as HTMLCanvasElement;
    const ctx: any = canvas.getContext('2d');

    const leftLocation: FootLocation = {
      x: 0,
      y: 0,
      orientation: 85
    }

    const rightLocation: FootLocation = {
      x: 0,
      y: 0,
      orientation: 45
    }

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

    function placeIcon() {

    }

    function drawFeet(leftFoot: FootLocation, rightFoot: FootLocation) {

    }
    
    drawGrid(ctx);

    function update() {

    }
    //Clean up event listeners on component unmount
    return () => {
    };
},[])

  return(
    <canvas id='placement-grid' width={width} height={height}>
    </canvas>
  )
};

export default PlacementGrid