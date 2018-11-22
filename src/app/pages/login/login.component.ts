import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})

export class LoginComponent implements OnInit {
  showError = false;
  showError2 = false;
  auth = 'show';
  reset = 'hide';
  resetPasswordAPI = 'www.url.com/testURL'; //TE VERVANGEN DOOR LOGIN API
  loginAPI = 'www.url.com/testLOGIN'; //TE VERVANGEN DOOR LOGIN API

  user = {
    name: '',
    password: '',
    email: ''
  };

  constructor(private authService: AuthService, private router: Router) {
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
    if (this.user.email !== '' || this.user.email !== '') {
      this.authService.login(this.user.email, this.user.password).subscribe(
        () => {
          console.log('user is logged in');
          this.router.navigate(['pages/index']);
        }
      );
      if (this.authService.isLoggedIn()) {
        this.router.navigate(['pages/index']);
      } else {
        this.showError = true;
      }
    } else {
      this.showError = false;
      this.showError2 = true;
    }
  }
}
