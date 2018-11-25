import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import * as moment from 'moment';
import {map} from 'rxjs/operators';
import 'rxjs/add/operator/shareReplay';

@Injectable()
export class AuthService {

  permissionArray = [];

  readonly ROOT_URL = 'http://localhost:1234/';

  constructor(private http: HttpClient, private router: Router) {
  }

  login(email: string, password: string) {
    return this.http.post<any>(this.ROOT_URL + 'users/login', {email, password})
      .pipe(
        map(res => {
          this.setSession(res);
        })
      ).shareReplay();
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    console.log(authResult.idToken);

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem('permissions', authResult.permissions);
    this.permissionArray = localStorage.getItem('permissions').split(',');
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('persmissions');
    this.router.navigate(['login']);
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  public canViewBeheerShop() {
    this.permissionArray = localStorage.getItem('permissions').split(',');
    if (this.permissionArray.indexOf('reward') !== -1) {
      return true;
    } else {
      return false;
    }
  }

  public canViewBeheerActiviteiten() {
    this.permissionArray = localStorage.getItem('permissions').split(',');
    if (this.permissionArray.indexOf('assignment') !== -1) {
      return true;
    } else {
      return false;
    }
  }

  public canviewPuntenToekennen() {
    this.permissionArray = localStorage.getItem('permissions').split(',');
    if (this.permissionArray.indexOf('approve') !== -1) {
      return true;
    } else {
      return false;
    }
  }
}
