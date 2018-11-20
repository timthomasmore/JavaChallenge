import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthService {

  readonly ROOT_URL = 'http://localhost:1234/';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<{ token: string }>(this.ROOT_URL + 'users/login', {email: email, password: password})
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          console.log(res.token);
        }
      );
  }

}
