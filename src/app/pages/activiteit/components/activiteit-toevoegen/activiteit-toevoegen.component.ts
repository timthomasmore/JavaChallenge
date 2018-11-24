import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../../shared/services/rest.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-activiteit-toevoegen',
  templateUrl: './activiteit-toevoegen.component.html',
  styleUrls: ['./activiteit-toevoegen.component.scss'],
  providers: [RestService]
})
export class ActiviteitToevoegenComponent implements OnInit {

  assignments = [];

  constructor(private restService: RestService) {
    this.restService.getAssignments().subscribe(
      (obj) => Object.keys(obj).forEach( key => this.assignments.push( obj[key]  ) ),
      (err) => console.log('Error', err) );
  }

  ngOnInit() {
  }

  completeAssignment(act, desc) {
    (desc.length === 0) ? this.alert2Error() : this.restService.completeAssignment(act, desc);
  }

  alert2Error() {
    swal({
      type: 'error',
      title: 'Oops...',
      text: 'Gelieve een korte verduidelijking in te vullen!',
    });
  }
}
