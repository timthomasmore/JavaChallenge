import {Injectable} from '@angular/core';

import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {share} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {pipe} from 'rxjs/util/pipe';

@Injectable()
export class RestService {

  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
  readonly ROOT_URL = 'http://localhost:1234/';

  constructor(private http: HttpClient) {
  }

  getTotalUsers(): Observable<any> {
    return this.http.get<any>(this.ROOT_URL + 'users/amount');
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>(this.ROOT_URL + '/users/login', {email: email, password: password})
      .pipe(
        map(result => {
          localStorage.setItem('access_token', 'result.token');
          return true;
        })
      );
  }
}
