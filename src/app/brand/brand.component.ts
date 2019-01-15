import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.sass']
})
export class BrandComponent {
  isNav: boolean;
  @HostListener("window:scroll", ['$event'])
  doSomethingOnWindowsScroll($event:Event){
    let scrollOffset = $event.srcElement.children[0].scrollTop;
    if (scrollOffset < 5) {
      this.isNav = false;
    } else {
      this.isNav = true;
    }
  }
  constructor() { 
  }

}
