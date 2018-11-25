import { Component, Input } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import {AuthService} from '../../services/auth.service';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
  providers: [RestService]
})
export class PagesTopComponent {
  avatarImgSrc: string = 'assets/images/avatar.png';
  userName: string = '';
  userPost: string = '';
  userCredits: string = '';
  userData = [];

  sidebarToggle: boolean = true;
  tip = { ring: true, email: true };

  constructor(private _globalService: GlobalService, private authService: AuthService,
              private restService: RestService) { this.getUserData(); }



  public _sidebarToggle() {
    /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    }); */

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'sidebarToggle') {
        this.sidebarToggle = data.value;
      }
    }, error => {
      console.log('Error: ' + error);
    });
    this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);


    //this._globalService._sidebarToggleState(!this.sidebarToggle);
  }

  signOut() {
    console.log('Signing out');
    this.authService.logout();
  }

  getUserData() {
    console.log('hallo');

    this.restService.getUserInfo().subscribe(
      (obj) => Object.keys(obj).forEach( key => this.userData[key] = obj[key] ),
      (err) => console.log('Error', err),
      () => this.initUserData( this.userData ) );
  }

  initUserData(d) {
    this.userName = d[0].name;
    this.userPost = d[0].email;
    this.userCredits = d[0].credits;
  }
}
