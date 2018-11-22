import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'right-config',
  templateUrl: './right-config.component.html',
  styleUrls: ['./right-config.component.scss']
})
export class RightConfigComponent implements OnInit {

  isConfigToggle: boolean = false;
  constructor(private _globalService: GlobalService, private authService: AuthService) { }

  ngOnInit() { }

  configToggle() {
    this.isConfigToggle = !this.isConfigToggle;
    //this._globalService._sidebarToggleState(!this.isConfigToggle);
    this._globalService.dataBusChanged('sidebarToggle', !this.isConfigToggle);
  }

  signOut() {
    console.log('Signing out');
    this.authService.logout();
  }
}
