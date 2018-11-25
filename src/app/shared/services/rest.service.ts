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

 getAssignments(status: string = null): Observable<any> {
    return this.http.get<any>(this.ROOT_URL + 'assignments' + (status ? ('/' + status) : ''));
  }

  getUserInfo() {
    const user_id = jwt_decode( localStorage.getItem('id_token') )['sub'];
    return this.http.get<any>(this.ROOT_URL + 'users/user/' + user_id );
  }

  getTotalRewards() {
    return this.http.get<any>(this.ROOT_URL + 'users/totalredeemed' );
  }

  completeAssignment(as, desc) {
    const body = {
      assignmentid: as._id,
      userid: jwt_decode( localStorage.getItem('id_token') )['sub'],
      description: desc
    };

    return this.http.post<any>(this.ROOT_URL + 'users/addassignment', body).subscribe( res => console.log(res) );
  }



  createAssignment(body) {
    return this.http.post<any>(this.ROOT_URL + 'assignments/create', body).subscribe( res => console.log(res) );
  }


  updateAssignmentStatus(body) {
    return this.http.post<any>(this.ROOT_URL + 'assignments/approve', body).subscribe( res => console.log(res) );
  }

  deleteAssignment(assignment) {
    return this.http.delete<any>(this.ROOT_URL + 'assignments/' + assignment._id + '/delete').subscribe( res => console.log(res) );
  }

  redeemReward(rewardid: string) {
    const body = {
      rewardid: rewardid,
      userid: jwt_decode( localStorage.getItem('id_token') )['sub'],
    };
    return this.http.post(this.ROOT_URL + 'users/redeem', body,
      {responseType: 'text'});
  }

  getTotalEarned() {
    return this.http.get<any>(this.ROOT_URL + 'users/totalearned');
  }

  getMonthlyEarned(){
    return this.http.get<any>(this.ROOT_URL + 'users/monthlyearned');
  }
}
