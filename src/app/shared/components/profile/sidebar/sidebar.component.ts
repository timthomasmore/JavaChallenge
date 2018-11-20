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
  };

  rewardList = [
    {name: 'Bak bier', date: new Date(), points: 10},
    {name: 'Bon', date: new Date(), points: 20},
    {name: 'Reis', date: new Date(), points: 15},
    {name: 'Fles champagne', date: new Date(), points: 8}
  ];

  activityList = [
    {name: 'Blogpost schrijven', date: new Date(), points: 10},
    {name: 'Presentatie', date: new Date(), points: 20},
    {name: 'Nieuwe technologie onderzocht', date: new Date(), points: 15},
    {name: 'Bijwonen conferentie', date: new Date(), points: 8},
    {name: 'Meetup', date: new Date(), points: 8},
    {name: 'Andere', date: new Date(), points: 8}
  ];
  
  
  percent = Math.round( this.points.currentMonth / this.points.previousMonth * 100 );

  constructor() { 
    this.activityList = this.activityList.splice(0, 5);
    this.rewardList = this.rewardList.splice(0, 5);
  }

  ngOnInit() {
  }

}
