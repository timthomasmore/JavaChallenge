import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  points = {
    currentMonth: 65,
    previousMonth: 130,
    totalLifetime: 809,
    totalCurrent: 411,
    average: 110
  }
  
  percent = Math.round( this.points.currentMonth / this.points.previousMonth * 100 );

  constructor() { 

  }

  ngOnInit() {
  }

}
