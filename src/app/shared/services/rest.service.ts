import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {share} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RestService {

  readonly ROOT_URL = 'http://localhost:1234/';

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  getTotalUsers(): Observable<any> {
    console.log('Getting total users');
    /*return this.http.get(this.ROOT_URL + 'users/amount')
=======
  //getTotalUsers() {
    /*console.log('Getting total users');
    return this.http.get(this.ROOT_URL + 'users/amount')
>>>>>>> ee1ab8e1309ca5d1f064becfe1a882ff9cfb3402
      .pipe(
        tap(req => console.log('get-request', req)),               // (6)
        catchError(                                                // (7)
          (error) => {
            console.log(error);
            alert(error.message);
            return null;
          }),
        share()                                                    // (8)
      );*/
<<<<<<< HEAD
      return this.http.get<any>(this.ROOT_URL + 'users/amount');
=======

  //}

  getTotalUsers() {
    console.log(this.http.get(this.ROOT_URL + 'users/amount'));
    return this.http.get(this.ROOT_URL + 'users/amount');
>>>>>>> ee1ab8e1309ca5d1f064becfe1a882ff9cfb3402
  }

}
