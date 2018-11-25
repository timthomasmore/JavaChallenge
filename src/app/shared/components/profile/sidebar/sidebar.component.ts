import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../../services/rest.service';

@Component({
  selector: 'profile-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() userData;

  points = [];

  recentRewards = [];
  rewardsInfo = [];
  recentActivities = [];
  activitiesInfo = [];

  constructor(private restService: RestService) { 
    this.recentRewards.push(null);
    this.recentActivities.push(null);

    this.restService.getTotalEarned().subscribe( d => this.points['total'] = d);
    this.restService.getMonthlyEarned().subscribe( d => {
      let total = 0;
      for (let i of d) {
        total += i;
      }
      this.points['currentMonth'] = d[0];
      this.points['previousMonth'] = d[1];
      this.points['average'] = total / d.length;
    });
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
    }

    return true;
  }

}
