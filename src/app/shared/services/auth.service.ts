import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import * as moment from 'moment';
import {map} from 'rxjs/operators';
import 'rxjs/add/operator/shareReplay';

@Injectable()
export class AuthService {

    readonly ROOT_URL = 'http://localhost:1234/';

    constructor(private http: HttpClient, private router: Router) {
    }

    login(email: string, password: string) {
        return this.http.post<any>(this.ROOT_URL + 'users/login', {email, password})
            .pipe(
                map(res => this.setSession)
            ).shareReplay();
    }

    private setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn, 'second');

        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    }

    logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
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

}
