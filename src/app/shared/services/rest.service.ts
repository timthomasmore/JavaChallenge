import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

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

  getRewards(): Observable<any> {
    return this.http.get<any>(this.ROOT_URL + 'rewards');
  }

  getAssignments(): Observable<any> {
    return this.http.get<any>(this.ROOT_URL + 'assignments');
  }

  getUserInfo() {
    const user_id = jwt_decode( localStorage.getItem('id_token') )['sub'];
    return this.http.get<any>(this.ROOT_URL + 'users/user/' + user_id );
  }

  completeAssignment(as, desc) {
    const body = {
      assignmentid: as._id,
      userid: jwt_decode( localStorage.getItem('id_token') )['sub'],
      description: desc
    };

    return this.http.post<any>(this.ROOT_URL + 'users/addassignment', body).subscribe( res => console.log(res) );
  }

  redeemReward(userid: string, rewardid: string) {
    return this.http.post(this.ROOT_URL + 'redeem/' + userid, {rewardid: rewardid})
      .subscribe(
        res => {

        }
      );
  }
}
