import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-drawer-canvas',
  templateUrl: './drawer-canvas.component.html',
  styleUrls: ['./drawer-canvas.component.sass']
})

export class DrawerCanvasComponent implements OnInit {

  constructor() {
   this.canvas = null;
  }
  isNav: boolean;

  canvas: any;
  @ViewChild('color') colorInput;
  @HostListener('window:scroll', ['$event'])

  doSomethingOnWindowsScroll($event: any) {
    const scrollOffset = $event.srcElement.children[0].scrollTop;
    if (scrollOffset < 5) {
      this.isNav = false;
    } else {
      this.isNav = true;
    }
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
      this.canvas.freeDrawingBrush.color = this.colorInput.nativeElement.value || '#000000';
      this.canvas.freeDrawingBrush.width = 1;
    }
    this.resize();
  }
  newDraw() {
    this.canvas.isDrawingMode = false;
  }
  resize() {
    this.canvas.setWidth(window.innerWidth);
    this.canvas.setHeight(window.innerHeight + 10);
  }
  activeDrawing(active: boolean) {
    this.canvas.isDrawingMode = active;
  }
  colorChange(event: any) {
    this.canvas.freeDrawingBrush.color = this.colorInput.nativeElement.value || '#000000';
  }
  clearCanvas(event: any) {
    this.canvas.clear();
  }

}
