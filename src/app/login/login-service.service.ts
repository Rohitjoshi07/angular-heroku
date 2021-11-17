import { Injectable } from '@angular/core';
import { User1 } from '../user1';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url = "https://global-rest-api.herokuapp.com";

  constructor(private _http: HttpClient) { }

  // public doLogin(user: User1): Observable<any> {
  //   return this._http.post<any>("https://global-rest-api.herokuapp.com/userAuth/login", user);
  // }

  generateToken(user: any) {
    return this._http.post(`${this.url}/authenticate`, user);
  }

  loginUser(token: any) {
    localStorage.setItem('token', token);
    return true;

  }

  isLoggedIn() {
    let token = localStorage.getItem("token");

    if (token == undefined || token === '' || token == null) {
      return false;
    }
    else {
      return true;
    }
  }

  logout() {
    localStorage.removeItem('token');
    return true;
  }

  getToken() {
    return localStorage.getItem('token');
  }

}


