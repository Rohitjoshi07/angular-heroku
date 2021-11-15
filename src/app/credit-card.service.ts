import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User2 } from './user2';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(private http: HttpClient) { }

  public doApplyForCreditCard(user: User2): Observable<any> {

    return this.http.post<any>("https://global-rest-api.herokuapp.com/user", user);
  }
}
