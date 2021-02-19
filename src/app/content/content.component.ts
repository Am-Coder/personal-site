import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeInAnimation } from './animation';

@Component({
  selector: 'app-content',
  animations: [
    fadeInAnimation
  ],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
