import { HttpClient } from '@angular/common/http';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';



 export class Ace {
  constructor(
    public cardNumber: string,
    public firstname: string,
    public lastname: string,
    public cvv: number,
    public expiry: string,
   // public cardType : string;
  ) {
  }
}

@Component({
  selector: 'app-ace',
  templateUrl: './ace.component.html',
  styleUrls: ['./ace.component.css']
})
export class AceComponent implements OnInit {
 
  public aces : Ace[] = [{
    cardNumber : "1234567891234567",
    firstname : "Avinash",
    lastname : "gadekar",
    cvv : 123,
    expiry : "11/26"
  }];
  
 
  constructor(
    private httpClient : HttpClient
    ) { }

  ngOnInit(): void {
   // this.getAces();
    }
    getAces()
  {
    this.httpClient.get<any>('http://localhost:8080/Aces').subscribe(
      response => {
        this.aces = response;
      }
    );
  }
 

}
