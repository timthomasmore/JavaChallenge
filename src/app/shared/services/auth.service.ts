import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  readonly ROOT_URL = 'http://localhost:1234/';

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    return this.http.post<{ token: string }>(this.ROOT_URL + 'users/login', {email: email, password: password})
      .subscribe(
        res => {
            if (!res.token.startsWith('ERROR')) {
                localStorage.setItem('token', res.token);
                console.log(res.token);
                this.router.navigate(['pages/index']);
            }else {
                console.log(res.token);
                return false;
            }
        }
      );
  }

}
