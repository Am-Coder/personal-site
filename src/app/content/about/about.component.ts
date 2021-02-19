import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  animations: [
    trigger('fadeIn', [
      state('hidden', style({
        opacity: 0,
      })),
      state('shown', style({
        opacity: 1,
      })),
      transition('hidden => shown', [
        animate('1s'),
      ]),
      transition('shown => hidden', [
        animate('1s'),
      ])
    ])
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  state : string = 'hidden';

  constructor() { }
  
  // ngOnDestroy(): void {
  //   setTimeout(() => {
  //     this.state = 'hidden';
  //   }, 3000);  
  // }

  // ngAfterViewInit(): void {
  //   this.state = 'shown';
  // }

  ngOnInit(): void {

  }

}
