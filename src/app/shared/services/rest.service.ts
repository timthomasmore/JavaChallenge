import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
}
