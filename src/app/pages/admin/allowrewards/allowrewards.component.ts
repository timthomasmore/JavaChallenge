import { Component, OnInit, Input } from '@angular/core';
import swal from 'sweetalert2';
import { RestService } from '../../../shared/services/rest.service';

@Component({
  selector: 'app-allowrewards',
  templateUrl: './allowrewards.component.html',
  styleUrls: ['./allowrewards.component.scss'],
  providers: [RestService]
})
export class AllowrewardsComponent implements OnInit {

  activityList = [];
  
  constructor(private restService: RestService) { 
    this.restService.getAssignments('unapproved').subscribe( 
      arr => {
        for (let a of arr) {
          a.active ? delete a.active : console.log('deleted property'); // Nodig omdat er verkeerde data was opgeslagen
          a.assignment[0] ? this.activityList.push(a) : console.log('no assignment'); // ""
        }
      },
      err => console.log('Error!', err),
      () => console.log(this.activityList) ); // TODO! Console.log(this.activityList) verwijderen als pagina klaar is
  }
  
  ngOnInit() { }
  

  alertConfirm(action: string, activity) {
    let wrapperStyle = 'font-size: 16px !important;';
    let spanStyle = 'width: 150px !important; display: inline-block !important;';
    let titleSpanStyle = 'font-weight: 400 !important; text-align: right;';
    let valueSpanStyle = 'text-align: left;';

    swal({
      customClass: 'confirmation-modal',
      title: 'Activiteit overzicht',
      html: 
        '<div class="modal-wrapper" style="' + wrapperStyle + '">' +
          '<div class="modal-activity-employee">' +
            '<span style="' + spanStyle + ' ' + titleSpanStyle + '">Medewerker:</span> ' +
            '<span style="' + spanStyle + ' ' + valueSpanStyle + '">' + activity.username + '</span>' + 
          '</div>' + 
          '<div class="modal-activity-name">' +
            '<span style="' + spanStyle + ' ' + titleSpanStyle + '">Activiteit:</span> ' +
            '<span style="' + spanStyle + ' ' + valueSpanStyle + '">' + activity.assignment[0].name + '</span>' +
          '</div>' +
          '<div class="modal-activity-points">' +
            '<span style="' + spanStyle + ' ' + titleSpanStyle + '">Punten:</span> ' +
            '<span style="' + spanStyle + ' ' + valueSpanStyle + '">' + activity.assignment[0].credits + '</span>' +
          '</div>' +
        '</div>',
      showCancelButton: true,
      confirmButtonColor: ( action === 'confirm' ? '#5cb85c' : action === 'deny' ? '#428bca' : null),
      cancelButtonColor: '#d33',
      confirmButtonText: ( action === 'confirm' ? 'Activiteit goedkeuren' : action === 'deny' ? 'Activiteit afkeuren' : null),
      cancelButtonText: 'Annuleren',
      padding: 20,
      width: 350
    }).then((result) => {
      if (result.value) {
        this.activityList.splice( this.activityList.indexOf(activity), 1 );
        let body = { assignmentId: activity.assignmentid, status: (action === 'confirm' ? 2 : action === 'deny' ? 3 : 1),userid: activity._id, completedassignmentid: activity.id };
        this.restService.updateAssignmentStatus(body);
        console.log(activity);
        swal(
          ( action === 'confirm' ? 'Bevestigd!' : action === 'deny' ? 'Afgewezen!' : null),
          ( action === 'confirm' ? 'De activiteit is bevestigd en de punten zijn toegekend.' :
            action === 'deny' ? 'De activiteit is afgewezen. Er zijn geen punten toegekend' : null),
          ( action === 'confirm' ? 'success' : action === 'deny' ? 'error' : null)
        );
      }
    });
  }

}
