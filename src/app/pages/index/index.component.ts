import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts/components/echarts/charts.service';
import {RestService} from '../../shared/services/rest.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ChartsService, RestService]
})
export class IndexComponent implements OnInit {
  showloading: boolean = false;

  public AnimationBarOption;

  totalUsers;
  totalScoredPoints;
  totalBoughtRewards;
  BarOption;
  monthlyPoints = [];

  constructor(private _chartsService: ChartsService, private restService: RestService) {}

  ngOnInit() {
<<<<<<< HEAD
      this.restService.getTotalUsers().subscribe(response => this.totalUsers = JSON.stringify(response.amountUsers));
    //this.restService.getTotalUsers().subscribe(response => this.totalUsers = response);
    //console.log(this.restService.getTotalUsers());
=======
    console.log(this.restService.getTotalUsers());
    this.restService.getTotalUsers().subscribe(response => {
      this.totalUsers = JSON.parse(response['_body']).amountUsers;
    });

    console.log(this.restService.getTotalUsers());
>>>>>>> ee1ab8e1309ca5d1f064becfe1a882ff9cfb3402
    this.monthlyPoints = [10, 52, 200, 334, 500, 330, 500, 600, 500, 250, 389, 829]; // Te vervangen door api call
    this._chartsService.inputData1 = this.monthlyPoints;
    this.BarOption = this._chartsService.getBarOption();
    this.AnimationBarOption = this._chartsService.getAnimationBarOption();
    this.totalScoredPoints = 1500; // Te vervangen door api call
    this.totalBoughtRewards = 137; // Te vervangen door api call
  }
}
