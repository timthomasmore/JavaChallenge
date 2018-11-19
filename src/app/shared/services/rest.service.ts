import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {share} from 'rxjs/operators';

@Injectable()
export class RestService {

  readonly ROOT_URL = 'http://localhost:1234/';

  constructor(private http: Http) { }

  getTotalUsers() {
    console.log('Getting total users');
    return this.http.get(this.ROOT_URL + 'users/amount')
      .pipe(
        tap(req => console.log('get-request', req)),               // (6)
        catchError(                                                // (7)
          (error) => {
            console.log(error);
            alert(error.message);
            return null;
          }),
        share()                                                    // (8)
      );
  }

}
