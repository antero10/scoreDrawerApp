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
  @ViewChild('strong') strongInput;
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
    if  (window.innerHeight / 2 < 500) {
      this.canvas.setHeight(500);
    }
    else {
      this.canvas.setHeight(window.innerHeight / 2);
    }
  }
  activeDrawing(active: boolean) {
    this.canvas.isDrawingMode = active;
  }
  colorChange(event: any) {
    this.canvas.freeDrawingBrush.color = this.colorInput.nativeElement.value || '#000000';
  }
  strongChange(event: any) {
    this.canvas.freeDrawingBrush.width = this.strongInput.nativeElement.value;
  }
  clearCanvas(event: any) {
    this.canvas.clear();
  }

}
