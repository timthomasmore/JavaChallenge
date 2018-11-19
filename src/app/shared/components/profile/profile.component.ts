import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user = {
    name: 'Langenaam Omtetestenjijweet',
    image: '../../../assets/images/avatar.png'
  }
  
  constructor() { }

  ngOnInit() {
  }

}
