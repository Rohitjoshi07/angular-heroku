import { Component, OnInit } from '@angular/core';
import { AceService } from 'src/app/ace.service';

@Component({
  selector: 'app-ace',
  templateUrl: './ace.component.html',
  styleUrls: ['./ace.component.css']
})
export class AceComponent implements OnInit {
  cards: Array<{ cardnum: string, cardType: string, fname: string, lname: string, expiry: string, cvv: string }> = Array(
    { "cvv": "123", "cardType": "Magnus", "fname": "Avi", "lname": "gadekar", "expiry": "11/30", "cardnum": "1234567998728574" },
    { "cvv": "456", "cardType": "Ace", "fname": "Mangesh", "lname": "Potdar", "expiry": "12/31", "cardnum": "4567998745628596" },
    { "cvv": "785", "cardType": "Neon", "fname": "Rohit", "lname": "Joshi", "expiry": "10/28", "cardnum": "9854758874561142" },
    { "cvv": "456", "cardType": "Ace", "fname": "Sarthak", "lname": "hejib", "expiry": "12/31", "cardnum": "4567998745634569" }
  );
  aces: any;

  isShow: boolean = true
  constructor(
    private service: AceService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  isToggle() {
    this.isShow = !this.isShow
  }
  getData() {
    this.service.getUserName().subscribe(
      (data: any) => {
        console.log(data);
        if (data.email) {
          this.service.getCardDetailsForUser(data.panNumber).subscribe(
            (data: any) => {
              console.log(data);
              this.aces = data.carddata
              console.log(this.aces);

            },
            (error: any) => {
              console.log(error);
            }
          )
        }
        else {
          console.log("User Not Found with Email Id");
        }
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
}