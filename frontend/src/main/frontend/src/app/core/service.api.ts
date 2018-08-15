import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {User} from './entity/User';
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

const headers = new HttpHeaders().set("Content-Type", "application/json")
  .set('Accept', 'application/json').set("Cache-Control", "no-cache");


@Injectable()
export class ServiceApi {

  private baseUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get<User>(  `${this.baseUrl}/${id}` );

  }

  deleteUser(id: number) : Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}` ,{headers});
  }


  updateUser(user: User): Observable<User>  {

    return this.http.post<User>(this.baseUrl, user, {headers});
  }


  createUser(user: User): Observable<User>  {

    return this.http.post<User>(this.baseUrl, user, {headers});
  }
}
