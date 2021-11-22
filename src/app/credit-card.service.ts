import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User2 } from './user2';
import { Observable } from 'rxjs';
import { LoginServiceService } from './login/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  constructor(private http: HttpClient) { }

  public doApplyForCreditCard(user: User2): Observable<any> {


    return this.http.post<any>("https://global-rest-api.herokuapp.com/user", user, {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + localStorage.getItem("token"),
        'Access-Control-Allow-Origin': '*'
      }
      )
    });
  }

  public addCreditDetails(user: User2): Observable<any> {
    console.log(user);
    return this.http.post<any>("https://global-rest-api.herokuapp.com/card/generate", user, {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + localStorage.getItem("token"),
        'Access-Control-Allow-Origin': '*'
      }
      )
    });

  }
}
