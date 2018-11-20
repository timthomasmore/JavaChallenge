import {Component, OnInit} from '@angular/core';
import {RestService} from '../../shared/services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [RestService]
})
export class LoginComponent implements OnInit {
  auth = 'show';
  reset = 'hide';
  resetPasswordAPI = 'www.url.com/testURL'; //TE VERVANGEN DOOR LOGIN API
  loginAPI = 'www.url.com/testLOGIN'; //TE VERVANGEN DOOR LOGIN API

  user = {
    name: '',
    password: '',
    email: ''
  };

  constructor(private restService: RestService) {
  }

  ngOnInit() {
  }

  forgotPassword() {
    this.auth = 'hide';
    this.reset = 'show';
  }

  back() {
    this.auth = 'show';
    this.reset = 'hide';
    this.user.name = '';
    this.user.password = '';
    this.user.email = '';
  }

  resetPassword() {
    if (this.user.email !== '') {
      alert('A password reset link has been sent to your email adres: ' + this.user.email);
    } else {
      alert('enter email');
    }
  }

  login() {
    if (this.user.name !== '' || this.user.name !== '') {
      alert('Login Succesful for: ' + this.user.name + ' - ' + this.user.password);
    } else {
      alert('Enter username and password');
    }
  }
}
