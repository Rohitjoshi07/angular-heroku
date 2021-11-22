import { HttpClient } from '@angular/common/http';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';
import { AceService } from 'src/app/ace.service';



// export class Ace {
//   cardNumber: string;
//   firstname: string;
//   lastname: string;
//   cvv: number;
//   expiry: string
//   constructor(
//     cardNumber: string,
//     firstname: string,
//     lastname: string,
//     cvv: number,
//     expiry: string
//     // public cardType : string;
//   ) {
//     this.cardNumber = cardNumber,
//       this.firstname = firstname,
//       this.lastname = lastname,
//       this.cvv = cvv,
//       this.expiry = expiry
//   }
// }

@Component({
  selector: 'app-ace',
  templateUrl: './ace.component.html',
  styleUrls: ['./ace.component.css']
})
export class AceComponent implements OnInit {

  // a: any = new Ace("", "", "", 0, "");
  // cn: any = this.a.cardNumber;
  aces: any;


  constructor(
    private service: AceService,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getData();
  }


  getData() {
    this.service.getUserName().subscribe(
      (data: any) => {
        console.log(data);
        if (data.email) {
          this.service.getCardDetailsForUser(data.panNumber).subscribe(
            (data: any) => {
              this.aces = data.carddata
              // this.a.cardNumber = data.carddata.cardnum;
              // this.a.firstname = data.carddata.fname,
              //   this.a.lastname = data.carddata.lname,
              //   this.a.cvv = data.carddata.cvv,
              //   this.a.expiry = data.carddata.expiry
              // console.log(this.a);
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