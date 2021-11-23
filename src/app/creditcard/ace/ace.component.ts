import { Component, OnInit } from '@angular/core';
import { AceService } from 'src/app/ace.service';

@Component({
  selector: 'app-ace',
  templateUrl: './ace.component.html',
  styleUrls: ['./ace.component.css']
})
export class AceComponent implements OnInit {
  aces: any;
  constructor(
    private service: AceService,
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