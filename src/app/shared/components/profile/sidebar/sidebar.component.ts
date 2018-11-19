import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  points = {
    current: 65,
    previous: 130,
    total: 809,
    average: 110
  }

  percent = Math.round( this.points.current / this.points.previous * 100 );

  constructor() { }

  ngOnInit() {
  }

}
