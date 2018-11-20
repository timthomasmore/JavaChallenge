import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activiteit-toevoegen',
  templateUrl: './activiteit-toevoegen.component.html',
  styleUrls: ['./activiteit-toevoegen.component.scss']
})
export class ActiviteitToevoegenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(formData) { // TODO: naar back-end versturen
    let activiteit = formData.value.activiteit;
    let beschrijving = formData.value.beschrijving;
    console.log(activiteit, beschrijving);
  }
}
