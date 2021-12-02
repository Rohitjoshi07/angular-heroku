import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardserviceService {
  constructor(private httpClient: HttpClient) { }
  public getDetails(): Observable<any> {
    return this.httpClient.get<any>("https://global-rest-api.herokuapp.com/details/dashboar")
  }
}
