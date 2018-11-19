import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts/components/echarts/charts.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ChartsService]
})
export class IndexComponent implements OnInit {
  showloading: boolean = false;

  public AnimationBarOption;

  totalUsers;
  totalScoredPoints;
  totalBoughtRewards;
  BarOptionCustom;
  monthlyPoints = [];

  constructor(private _chartsService: ChartsService) {}

  ngOnInit() {
    this.monthlyPoints = [10, 52, 200, 334, 500, 330, 500, 600, 500, 250, 389, 829]; // Te vervangen door api call
    this.BarOptionCustom = this._chartsService.getBarOptionCustom(this.monthlyPoints);
    this.AnimationBarOption = this._chartsService.getAnimationBarOption();
    this.totalUsers = 214; // Te vervangen door api call
    this.totalScoredPoints = 1500; // Te vervangen door api call
    this.totalBoughtRewards = 137; // Te vervangen door api call
  }
}
