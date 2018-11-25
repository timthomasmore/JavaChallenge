import {Component, OnInit} from '@angular/core';
import {ChartsService} from "../../shared/services/charts.service";
import {RestService} from '../../shared/services/rest.service';

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

  constructor(private chartsService: ChartsService, private restService: RestService) {
  }

  ngOnInit() {
    this.restService.getTotalUsers().subscribe(response => this.totalUsers = Object.values(response));
    this.monthlyPoints = [10, 52, 200, 334, 500, 330, 500, 600, 500, 250, 389, 829]; // Te vervangen door api call
    this.restService.getMonthlyEarned().subscribe(response => console.log(response));
    this.restService.getMonthlyEarned().subscribe(response => this.BarOption = this.chartsService.getBarOptionCustom(response)); // TODO! array plaatsen in grafiek
    this.BarOption = this.chartsService.getBarOptionCustom(this.monthlyPoints);
    this.AnimationBarOption = this.chartsService.getAnimationBarOption();
    this.restService.getTotalEarned().subscribe(response => this.totalScoredPoints = response);
    this.restService.getTotalRewards().subscribe(response => this.totalBoughtRewards = response);
  }
}
