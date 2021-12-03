import { Component, OnInit } from '@angular/core';
import { CompareserviceService } from './compareservice.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  price1: any;
  price2: any;
  price3: any;
  interest1: any;
  interest2: any;
  interest3: any;
  repaymentday1: any;
  repaymentday2: any;
  repaymentday3: any;
  feature1: any;
  feature2: any;
  feature3: any;
  bool1: boolean = false;
  bool2: boolean = false;
  bool3: boolean = false;
  cardsData1 = ["Ace", "Magnus", "Neo", "Platinum"];
  cardsData2 = ["Ace", "Magnus", "Neo", "Platinum"];
  cardsData3 = ["Ace", "Magnus", "Neo", "Platinum"];

  constructor(private service: CompareserviceService) {
  }

  cards: Array<{ creditCardName: string, salaryRange: string, interestRate: any, repaymentTime: any, creditCardTitle: string, creditCardFeatures: string, creditCardOtherFeatures: string }> = Array();
  ngOnInit(): void {
    this.getCardDetail();
  }

  getCardDetail() {
    this.service.getDetails().subscribe(
      (data: any) => {
        this.cards = data
      }
    )
  }

  selection1(data: any) {
    var index2 = this.cardsData2.indexOf(data.target.value)
    var index3 = this.cardsData3.indexOf(data.target.value)
    console.log("Selection 1 is : ", data.target.value, index2);
    this.cardsData2.splice(index2, 1);
    this.cardsData3.splice(index3, 1);
    this.cardsData1 = ["Ace", "Magnus", "Neo", "Platinum"];
    var selectedValue = data.target.value;
    this.bool1 = true;
    if (selectedValue === "Ace") {
      this.price1 = 1000;
      this.interest1 = this.cards[0].interestRate
      this.repaymentday1 = this.cards[0].repaymentTime
      this.feature1 = this.cards[0].creditCardOtherFeatures
    }
    else if (selectedValue === "Platinum") {
      this.price1 = 800;
      this.interest1 = this.cards[2].interestRate
      this.repaymentday1 = this.cards[2].repaymentTime
      this.feature1 = this.cards[2].creditCardOtherFeatures

    }
    else if (selectedValue === "Magnus") {
      this.price1 = 600;
      this.interest1 = this.cards[1].interestRate
      this.repaymentday1 = this.cards[1].repaymentTime
      this.feature1 = this.cards[1].creditCardOtherFeatures
    }
    else if (selectedValue === "Neo") {
      this.price1 = 500;
      this.interest1 = this.cards[3].interestRate
      this.repaymentday1 = this.cards[3].repaymentTime
      this.feature1 = this.cards[3].creditCardOtherFeatures
    }

  }


  selection2(data: any) {
    var index1 = this.cardsData1.indexOf(data.target.value)
    var index3 = this.cardsData3.indexOf(data.target.value)
    console.log("Selection 1 is : ", data.target.value, index1);
    this.cardsData1.splice(index1, 1);
    this.cardsData3.splice(index3, 1);
    this.cardsData2 = ["Ace", "Magnus", "Neo", "Platinum"];

    var selectedValue = data.target.value;
    this.bool2 = true
    if (selectedValue === "Ace") {
      this.price2 = 1000;
      this.interest2 = this.cards[0].interestRate
      this.repaymentday2 = this.cards[0].repaymentTime
      this.feature2 = this.cards[0].creditCardOtherFeatures
    }
    else if (selectedValue === "Platinum") {
      this.price2 = 800;
      this.interest2 = this.cards[2].interestRate
      this.repaymentday2 = this.cards[2].repaymentTime
      this.feature2 = this.cards[2].creditCardOtherFeatures

    }
    else if (selectedValue === "Magnus") {
      this.price2 = 600;
      this.interest2 = this.cards[1].interestRate
      this.repaymentday2 = this.cards[1].repaymentTime
      this.feature2 = this.cards[1].creditCardOtherFeatures
    }
    else if (selectedValue === "Neo") {
      this.price2 = 500;
      this.interest2 = this.cards[3].interestRate
      this.repaymentday2 = this.cards[3].repaymentTime
      this.feature2 = this.cards[3].creditCardOtherFeatures
    }
  }


  selection3(data: any) {

    var index1 = this.cardsData1.indexOf(data.target.value)
    var index2 = this.cardsData2.indexOf(data.target.value)
    console.log("Selection 1 is : ", data.target.value, index1);
    this.cardsData1.splice(index1, 1);
    this.cardsData2.splice(index2, 1);
    this.cardsData3 = ["Ace", "Magnus", "Neo", "Platinum"];
    var selectedValue = data.target.value;
    this.bool3 = true;
    if (selectedValue === "Ace") {
      this.price3 = 1000;
      this.interest3 = this.cards[0].interestRate
      this.repaymentday3 = this.cards[0].repaymentTime
      this.feature3 = this.cards[0].creditCardOtherFeatures
    }
    else if (selectedValue === "Platinum") {
      this.price3 = 800;
      this.interest3 = this.cards[2].interestRate
      this.repaymentday3 = this.cards[2].repaymentTime
      this.feature3 = this.cards[2].creditCardOtherFeatures

    }
    else if (selectedValue === "Magnus") {
      this.price3 = 600;
      this.interest3 = this.cards[1].interestRate
      this.repaymentday3 = this.cards[1].repaymentTime
      this.feature3 = this.cards[1].creditCardOtherFeatures
    }
    else if (selectedValue === "Neo") {
      this.price3 = 500;
      this.interest3 = this.cards[3].interestRate
      this.repaymentday3 = this.cards[3].repaymentTime
      this.feature3 = this.cards[3].creditCardOtherFeatures
    }

  }


  check() {
    if (this.bool1 || this.bool2 || this.bool3) {
      return true;
    }
    else {
      return false;
    }
  }

}
