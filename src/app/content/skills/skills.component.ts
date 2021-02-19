import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  menuType:number = 3;

  constructor() { }

  ngOnInit(): void {
  }

  switchMenu(type: number){
    this.menuType = type;
  }
}
