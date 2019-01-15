import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
@Component({
  selector: 'app-drawer-canvas',
  templateUrl: './drawer-canvas.component.html',
  styleUrls: ['./drawer-canvas.component.sass']
})
export class DrawerCanvasComponent implements OnInit {

  ctx: any;
  canvas: any;
  flag: boolean;
  prevX: number;
  currX: number;
  prevY: number;
  currY: number;
  dot_flag: boolean;
  color: string;
  y: number;

  constructor() {
    this.ctx = null;
    this.canvas = null;
    this.flag = false;
    this.prevX = 0;
    this.currX = 0;
    this.prevY = 0;
    this.currY = 0;
    this.dot_flag = false;
    this.color = 'black';
    this.y = 2;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.prevX, this.prevY);
    this.ctx.lineTo(this.currX, this.currY);
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = this.y;
    this.ctx.stroke();
    this.ctx.closePath();
  }
  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas', {
      isDrawingMode: true
    });
    fabric.Image.fromURL('https://www.askideas.com/media/16/Pug-Puppy-Running-On-Grass.jpg', (img) => {
      img.scale(0.5).set({
        left: 150,
        top: 150,
        width: 100,
        height: 100,
        angle: -15,
      });
      this.canvas.add(img).setActiveObject(img);
    });
    if (this.canvas.freeDrawingBrush) {
      this.canvas.freeDrawingBrush.color = '#4286f4';
      this.canvas.freeDrawingBrush.width = 1;
    }
    this.canvas.on({
      'touch:gesture': () => {
        const text = document.createTextNode(' Gesture ');
        console.log(text);
      },
      'touch:drag': () => {
        const text = document.createTextNode(' Dragging ');
        console.log(text);
      },
      'touch:orientation': () => {
        const text = document.createTextNode(' Orientation ');
        console.log(text);
      },
      'touch:shake': () => {
        const text = document.createTextNode(' Shaking ');
        console.log(text);
      },
      'touch:longpress': () => {
        const text = document.createTextNode(' Longpress ');
        console.log(text);
      }
    });
    this.resize();
  }
  newDraw() {
    this.canvas.isDrawingMode = false;
  }
  resize() {
    this.canvas.setWidth(window.innerWidth);
    this.canvas.setHeight(1000);
  }

}
