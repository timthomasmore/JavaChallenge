import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../../services/rest.service';

@Component({
  selector: 'profile-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() userData;

  points = {
    currentMonth: 65,
    previousMonth: 130,
    totalLifetime: 809,
    totalCurrent: 411,
    average: 110
  };

  recentRewards = [];
  rewardsInfo = [];
  recentActivities = [];
  activitiesInfo = [];

  percent = Math.round( this.points.currentMonth / this.points.previousMonth * 100 );

  constructor(private restService: RestService) { 
    this.recentRewards.push(null);
    this.recentActivities.push(null);
  }

  ngOnInit() { }

  getRecent(list, type) {
    let checkedIds = [];

    if (type === 'rewards' && this.recentRewards[0] === null) {
      this.recentRewards = list;
      this.recentRewards = this.recentRewards.reverse().splice(0, 5);

      for ( let item of this.recentRewards) {
        if ( checkedIds.indexOf(item.rewardid) === -1 ) {
          this.restService.getRewardDetails(item.rewardid).subscribe(d => this.rewardsInfo[d._id] = d );
          checkedIds.push(item.rewardid);
        }
      }
    }

    if (type === 'activities' && this.recentActivities[0] === null) {
      for (let item of list) {
        item.status === 2 ? this.recentActivities.push(item) : item = item;
      }

      this.recentActivities = this.recentActivities.reverse().splice(0, 5);

      for ( let item of this.recentActivities) {
        if ( checkedIds.indexOf(item.assignmentid) === -1 ) {
          this.restService.getAssignmentDetails(item.assignmentid).subscribe(d => this.activitiesInfo[d._id] = d );
          checkedIds.push(item.assignmentid);
        }
      }

      console.log('5 Recentste approved act', this.recentActivities);
      console.log('actInfo', this.activitiesInfo);
    }

    return true;
  }

}
