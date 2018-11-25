import { Component, OnInit, NgZone } from '@angular/core';
import { ChartsService } from '../../shared/services/charts.service';
import { RestService } from '../../shared/services/rest.service';
import {forEach} from "@angular/router/src/utils/collection";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ChartsService, RestService]
})
export class ProfileComponent implements OnInit {

  points = [
    /**{ date: new Date(2018, 1, 1), points: 10},
    { date: new Date(2018, 1, 3), points: 10},
    { date: new Date(2018, 1, 3), points: 1},
    { date: new Date(2018, 2, 3), points: 10},
    { date: new Date(2018, 2, 3), points: 10},
    { date: new Date(2018, 2, 1), points: 2},
    { date: new Date(2018, 2, 1), points: 10},
    { date: new Date(2018, 2, 1), points: 10},
    { date: new Date(2018, 3, 5), points: 3},
    { date: new Date(2018, 3, 5), points: 3},
    { date: new Date(2018, 5, 5), points: 3},
    { date: new Date(2018, 5, 5), points: 3},
    { date: new Date(2018, 5, 5), points: 10},
    { date: new Date(2018, 5, 1), points: 2},
    { date: new Date(2018, 5, 1), points: 2},
    { date: new Date(2018, 6, 1), points: 10},
    { date: new Date(2018, 6, 1), points: 10},
    { date: new Date(2018, 7, 12), points: 6},
    { date: new Date(2018, 7, 12), points: 6},
    { date: new Date(2018, 7, 12), points: 10},
    { date: new Date(2018, 7, 1), points: 10},
    { date: new Date(2018, 7, 1), points: 10},
    { date: new Date(2018, 8, 9), points: 10},
    { date: new Date(2018, 8, 9), points: 60},
    { date: new Date(2018, 8, 9), points: 10},
    { date: new Date(2018, 8, 9), points: 10},
    { date: new Date(2018, 9, 1), points: 10},
    { date: new Date(2018, 9, 1), points: 10},
    { date: new Date(2018, 9, 1), points: 10},
    { date: new Date(2018, 9, 1), points: 10},
    { date: new Date(2018, 9, 1), points: 40},
    { date: new Date(2018, 10, 1), points: 10},
    { date: new Date(2018, 10, 1), points: 10},
    { date: new Date(2018, 10, 1), points: 10},
    { date: new Date(2018, 10, 1), points: 10},
    { date: new Date(2018, 11, 1), points: 10},
    { date: new Date(2018, 11, 1), points: 10},
    { date: new Date(2018, 11, 1), points: 10},
    { date: new Date(2018, 11, 1), points: 10},
    { date: new Date(2018, 12, 1), points: 10},
    { date: new Date(2018, 12, 1), points: 10},
    { date: new Date(2018, 12, 29), points: 10}*/
  ];

  userData = [];
  rewardsData = [];

  shownData = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0 };
  currentDate = new Date();

  showloading = false;
  BarOption;
  LineOption;
  PieOption;
  AnimationBarOption;

  constructor(private chartsService: ChartsService, private restService: RestService, private ngZone: NgZone) {

    this.restService.getMonthlyEarnedUser().subscribe(res => {//console.log(res);
                                                                    this.points = this.convertpoints(res);
                                                                    this.setupGraph();});


    this.ngZone.run( () => {
      this.restService.getUserInfo().subscribe(
        (obj) => Object.keys(obj).forEach( key => this.userData[key] = obj[key] ),
        (err) => console.log('Error', err),
        () => this.initUserData( this.userData ) );

      this.restService.getRewards().subscribe(
        (obj) => Object.keys(obj).forEach( key => this.rewardsData[key] = obj[key] ),
        (err) => console.log('Error', err),
        () => this.initRewardsData( this.rewardsData ) );
    });


  }

  ngOnInit() { }

  setupGraph(){// Willekeurige test data
    let dat = new Date();
    let xaxDate = [];
    for (let i = 1; i <= 12; i++) {
      xaxDate.push((dat.getMonth() + 1) + '/' + dat.getFullYear() );
      dat.setMonth(dat.getMonth() - 1);
    }

  this.points.sort(function(a, b) { return a.date.getTime() - b.date.getTime(); } );
  for (let i = 0; i < this.points.length; i++) {
    if ( this.points[i].date > new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 12, this.currentDate.getDate() ) ) {
    this.shownData[this.points[i].date.getMonth() +1] += this.points[i].points;
    }
  }

    let xdd = [];
    for ( const i of xaxDate) {
      let y = i.split('/');
      xdd.push(this.shownData[y[0]]);
    }

    this.LineOption = this.chartsService.getLineOption(xdd.reverse(), xaxDate.reverse());
}

  initRewardsData(d) {
    //console.log( d );
  }

  initUserData(d) {
    //console.log( d );
  }

  convertpoints(points){
    points.forEach(function(data){
      data.date = new Date(data.date);
    })
    return points;
  }

}
