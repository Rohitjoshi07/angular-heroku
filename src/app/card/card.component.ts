import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../homeservice.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private service: HomeserviceService) { }
  cards: Array<{ creditCardName: string, salaryRange: string, interestRate: any, repaymentTime: any, creditCardTitle: string, creditCardFeatures: string, creditCardOtherFeatures: string }> = Array();
  ngOnInit(): void {
    this.getCardDetails();
  }

  getCardDetails() {
    this.service.getDetails().subscribe(
      (data: any) => {
        console.log(data);
        this.cards = data
      }
    )

  }



}
