import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  newActivity = {
    name: '',
    price: 0
  }

  activities = [];

  tempItem = [];

  constructor() { this.initActivities(); }

  ngOnInit() {
  }

  initActivities() {
    //##VOORLOPOGE DUMMY DATA, DIT MOET VAN DE BACKEND KOMEN
    this.activities.push(['Lezing geven', 20]);
    this.activities.push(['Les geven', 15]);
    this.activities.push(['Technologie onderzoeken', 30]);
    this.activities.push(['Idee pitchen', 15]);
    this.activities.push(['Dutje doen', 100]);
  }

  addActivity() {
    let tempActivity = [];
    tempActivity.push(this.newActivity.name);
    tempActivity.push(this.newActivity.price);
    this.activities.push(tempActivity);
    this.newActivity.name = '';
    this.newActivity.price = 0;

    //###HIER NOG LOGICA OM HET ITEM AAN DE DATABASE TOE TE VOEGEN
  }

  deleteActivity(item) {
    let newActivities = [];
    for (let i = 0; i < this.activities.length; i++) {
      if (item[0] !== this.activities[i][0]) {
        newActivities.push(this.activities[i]);
      }
    }
    this.activities = newActivities;

    //###HIER NOG LOGICA OM HET ITEM UIT DE DATABASE TE VERWIJDEREN

    return false;
  }

  openModalNG(modal, item) {
    modal.open();
    this.tempItem = item;
    return false;
  }

  closeModal(modal) {
    modal.close();
  }

  deleteModal(modal) {
    modal.close();
    this.onClose();
    this.deleteActivity(this.tempItem);
  }

  onClose() {
    swal({
      type: 'success',
      title: 'Success!',
      text: 'Reward is verwijderd!',
    });
  }
}
