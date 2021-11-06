import { Injectable } from '@angular/core';
import { User1 } from './user1';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private _http: HttpClient) { }

  public doLogin(user: User1): Observable<any> {
    return this._http.post<any>("https://global-rest-api.herokuapp.com/userAuth/login", user);
  }

  isLogin() {
    return true;
  }

}


