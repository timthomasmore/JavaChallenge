import { Component, OnInit, Input } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-allowrewards',
  templateUrl: './allowrewards.component.html',
  styleUrls: ['./allowrewards.component.scss']
})
export class AllowrewardsComponent implements OnInit {

  activityList = [];
  @Input()
  activityPoints: number = null;
  
  constructor() { }
  
  ngOnInit() {
    // Delete
    this.fillActivityList();
  }
  
  // Delete
  fillActivityList() {
    let activities = [ 'Lezing', 'Blogpost', 'Meetup', 'Conferentie', 'Onderzoek', 'Presentatie'];
    let firstNames = [ 'Jonathan', 'Tom', 'Jonas', 'Alex', 'Nathalie', 'Eva', 'Alexa'];
    let lastNames = [ 'Jones', 'Test', 'Evans', 'Johansson', 'Rolls'];

    for (let i = 0; i < 30; i++) {
      let activity = {name: '', employee: '', date: new Date(), points: null, description: '', id: null, pointsEditable: null};
      let days = Math.floor( Math.random() * 20 );
      let firstName = firstNames[Math.floor( Math.random() * firstNames.length )];
      let lastName = lastNames[Math.floor( Math.random() * lastNames.length )];
      let activityName = activities[Math.floor( Math.random() * activities.length )];
      
      activity.name = activityName;
      activity.employee = firstName + ' ' + lastName;
      activity.date.setDate( activity.date.getDate() - days );
      (i % 2 === 0) ? activity.points = i : activity.points = null;
      (activity.points === null) ? activity.pointsEditable = true : activity.pointsEditable = false;
      activity.description = 'Beschrijving activiteit';
      activity.id = i;

      this.activityList.push(activity);
    }
  }

  alertConfirm(activity) {
    let wrapperStyle = 'font-size: 16px !important;';
    let spanStyle = 'width: 150px !important; display: inline-block !important;';
    let titleSpanStyle = 'font-weight: 400 !important; text-align: right;';
    let valueSpanStyle = 'text-align: left;';
    let points: number;
    (activity.points !== null ? points = activity.points : points = this.activityPoints);

    swal({
      customClass: 'confirmation-modal',
      title: 'Activiteit overzicht',
      html: 
        '<div class="modal-wrapper" style="' + wrapperStyle + '">' +
          '<div class="modal-activity-employee">' +
            '<span style="' + spanStyle + ' ' + titleSpanStyle + '">Medewerker:</span> ' +
            '<span style="' + spanStyle + ' ' + valueSpanStyle + '">' + activity.employee + '</span>' + 
          '</div>' + 
          '<div class="modal-activity-name">' +
            '<span style="' + spanStyle + ' ' + titleSpanStyle + '">Activiteit:</span> ' +
            '<span style="' + spanStyle + ' ' + valueSpanStyle + '">' + activity.name + '</span>' +
          '</div>' +
          '<div class="modal-activity-points">' +
            '<span style="' + spanStyle + ' ' + titleSpanStyle + '">Punten:</span> ' +
            '<span style="' + spanStyle + ' ' + valueSpanStyle + '">' + points + '</span>' +
          '</div>' +
        '</div>',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Bevestig activiteit',
      cancelButtonText: 'Annuleren',
      padding: 20,
      width: 350
    }).then((result) => {
      if (result.value) {
        swal(
          'Bevestigd!',
          'De activiteit is bevestigd en de punten zijn toegekend.',
          'success'
        );
      }
    });
  }

}
