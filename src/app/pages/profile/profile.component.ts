import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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

  constructor() { 
    this.activityList = this.activityList.splice(0, 5);
    this.rewardList = this.rewardList.splice(0, 5);
  }

  ngOnInit() { }

}
