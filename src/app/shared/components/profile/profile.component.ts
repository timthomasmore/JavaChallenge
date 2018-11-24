import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() userData;

  user = {
    name: 'Langenaam Omtetestenjijweet',
    image: '../../../assets/images/avatar.png'
  };
  
  constructor() { }

  ngOnInit() {
  }

}
