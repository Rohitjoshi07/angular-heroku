import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User2 } from './user2';
import { Observable } from 'rxjs';
import { LoginServiceService } from './login/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  // headers = new HttpHeaders();

  // public token:any;

  // public baseheader:any='';

  // headerDict = {
  //   'Authorization': this.baseheader
  // }

  // requestOptions = {                                                                                                                                                                                 
  //   headers: new Headers(this.headerDict), 
  // };


  constructor(private http: HttpClient) { }

  public doApplyForCreditCard(user: User2): Observable<any> {
    console.log(localStorage.getItem("token"));

    return this.http.post<any>("https://global-rest-api.herokuapp.com/user", user, {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + localStorage.getItem("token"),
        'Access-Control-Allow-Origin': '*',
      }
      )
    });
  }

  // public getHeader(){

  //   this.token = this.service.getToken();

  //   this.baseheader = "Bearer "+this.token;



  // }
}
