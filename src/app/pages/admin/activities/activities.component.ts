import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { RestService } from '../../../shared/services/rest.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
  providers: [RestService]
})
export class ActivitiesComponent implements OnInit {

  newActivity = {
    name: '',
    description: '',
    url: '',
    credits: 0
  };

  chosenActivity = [];
  activityData = [];

  constructor(private restService: RestService) { 
    this.restService.getAssignments().subscribe(
      (obj) => Object.keys(obj).forEach( key => this.activityData.push( obj[key] ) ),
      (err) => console.log('Error!', err),
      () => console.log( this.activityData )
    );
   }

  ngOnInit() { }

  addAct() {
    this.activityData.push(this.newActivity);
    this.restService.createAssignment(this.newActivity);
    this.newActivity = {
      name: '',
      description: '',
      url: '',
      credits: 0
    };
  }

  openModalNG(modal, activity) {
    modal.open();
    this.chosenActivity = activity;
    return false;
  }

  closeModal(modal) {
    modal.close();
  }

  deleteModal(modal) {
    modal.close();
    this.onClose();
    this.activityData.splice( this.activityData.indexOf(this.chosenActivity) , 1 );
    this.restService.deleteAssignment(this.chosenActivity);
    this.chosenActivity = [];
  }

  onClose() {
    swal({
      type: 'success',
      title: 'Success!',
      text: 'Reward is verwijderd!',
    });
  }
}
