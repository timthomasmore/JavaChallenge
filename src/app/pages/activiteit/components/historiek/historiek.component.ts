import {Component, OnInit} from '@angular/core';
import {RestService} from '../../../../shared/services/rest.service';

@Component({
  selector: 'app-historiek',
  templateUrl: './historiek.component.html',
  styleUrls: ['./historiek.component.scss'],
  providers: [RestService]
})
export class HistoriekComponent implements OnInit {

  showloading: false;

  assignments = [];

  constructor(private restService: RestService) {
  }

  ngOnInit() {
    this.restService.getUserAllAssignments().subscribe(
      (obj) => Object.keys(obj).forEach(key => this.assignments.push(obj[key])),
      (err) => console.log('Error', err));
    //console.log(this.assignments);
  }

}
