import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.sass']
})
export class ShareComponent implements OnInit {
  heightShare: number
  step: number;
  name: string;
  constructor() { }

  ngOnInit() {
    this.heightShare = (window.innerHeight / 2) - 200;
    this.step = 2;
  }

}
