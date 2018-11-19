import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../../shared/services/charts.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ChartsService]
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

  showloading = false;
  BarOption;
  LineOption;
  PieOption;
  AnimationBarOption;

  constructor(private chartsService: ChartsService) { 
    this.activityList = this.activityList.splice(0, 5);
    this.rewardList = this.rewardList.splice(0, 5);

    let data1 = [];
    let data2 = [];
    let xAxisData = [];
    let pieData = [];
    let pieLegend = [];

    // EYY
    for (let i = 0; i < 12; i++) {
      data1.push( Math.floor( Math.random() * 120 ) );
      data2.push( Math.floor( Math.random() * 120 ) );
      xAxisData.push('Val ' + ( i + 1 ) );
      pieData.push( { value: data1[i], name: 'Val ' + i } );
      pieLegend.push('Val ' + i);
    }

    // EINDE EYY

    this.BarOption = this.chartsService.getBarOption(data1, xAxisData);
    this.LineOption = this.chartsService.getLineOption(data1, xAxisData);
    this.PieOption = this.chartsService.getPieOption(pieData, pieLegend);
    this.AnimationBarOption = this.chartsService.getAnimationBarOption(data1, data2, xAxisData);
  }

  ngOnInit() { }

}
