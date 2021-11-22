import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AceService {



  constructor(private httpClient: HttpClient) { }

  public getUserName(): Observable<any> {
    let username: any = localStorage.getItem('username');
    return this.httpClient.get<any>("https://global-rest-api.herokuapp.com/user/" + username, {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + localStorage.getItem("token"),
        'Access-Control-Allow-Origin': '*'
      }
      )
    });
  }

  public getCardDetailsForUser(panId: any): Observable<any> {
    return this.httpClient.get<any>("https://global-rest-api.herokuapp.com/card/getcard", {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + localStorage.getItem("token"),
        'Access-Control-Allow-Origin': '*'
      }
      ),
      params: {
        userid: panId
      }
    });

  }


}
