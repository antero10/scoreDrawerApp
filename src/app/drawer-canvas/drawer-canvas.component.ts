import { Component, OnInit } from '@angular/core';

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
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    const w = this.canvas.width;
    const h = this.canvas.height;

    this.canvas.addEventListener('mousemove', (e) => {
        this.findxy('move', e);
    }, false);
    this.canvas.addEventListener('mousedown', (e) => {
        this.findxy('down', e);
    }, false);
    this.canvas.addEventListener('mouseup', (e) => {
        this.findxy('up', e);
    }, false);
    this.canvas.addEventListener('mouseout', (e) => {
        this.findxy('out', e);
    }, false);
  }

  findxy(res: string, e: any) {
    if (res === 'down') {
      this.prevX = this.currX;
      this.prevY = this.currY;
      this.currX = e.clientX - this.canvas.offsetLeft;
      this.currY = e.clientY - this.canvas.offsetTop;

      this.flag = true;
      this.dot_flag = true;
      if (this.dot_flag) {
          this.ctx.beginPath();
          this.ctx.fillStyle = this.color;
          this.ctx.fillRect(this.currX, this.currY, 2, 2);
          this.ctx.closePath();
          this.dot_flag = false;
      }
  }
  if (res === 'up' || res === 'out') {
      this.flag = false;
  }
  if (res === 'move') {
      if (this.flag) {
          this.prevX = this.currX;
          this.prevY = this.currY;
          this.currX = e.clientX - this.canvas.offsetLeft;
          this.currY = e.clientY - this.canvas.offsetTop;
          this.draw();
      }
  }
  }



}
