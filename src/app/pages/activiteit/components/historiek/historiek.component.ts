import { Component, OnInit } from '@angular/core';
import {RestService} from "../../../../shared/services/rest.service";

@Component({
  selector: 'app-historiek',
  templateUrl: './historiek.component.html',
  styleUrls: ['./historiek.component.scss'],
  providers: [RestService]
})
export class HistoriekComponent implements OnInit {

  showloading: boolean = false;

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.restService.getUserAllAssignments().subscribe((res) => console.log(res));
  }

}
