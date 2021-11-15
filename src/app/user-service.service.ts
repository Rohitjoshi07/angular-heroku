import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  public checkUserExist(user: User): Observable<any> {
    console.log(user);
    return this.http.post<any>("https://global-rest-api.herokuapp.com/check", user);
  }
  public doRegistration(user: User): Observable<any> {

    return this.http.post<any>("https://global-rest-api.herokuapp.com/register", user);
  }
}
