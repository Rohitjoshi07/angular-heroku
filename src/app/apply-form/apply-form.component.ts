import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credit } from '../credit';
import { Salary } from '../Salary';
import { CreditCardService } from '../credit-card.service';
import { User2 } from '../user2';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css']
})
export class ApplyFormComponent implements OnInit {


  user = new User2("", "", "", "", "", "", "", "", "");

  credit: Credit[] = [
    { name: "Platinum" },
    { name: "Ace" },
    { name: "Magnus" },
    { name: "Neo" }
  ]

  salary: Salary[] = [
    { id: 1, range: "0 to 50k" },
    { id: 2, range: "50k to 1lac" },
    { id: 3, range: "1lac to 2lac" },
    { id: 4, range: "above 2 lac" }
  ]


  msg = '';

  constructor(private service: CreditCardService, private router: Router) { }

  ngOnInit(): void {
  }

  public applyNow() {
    // console.log(this.user);
    if ((this.user.name != '' && this.user.email != '' && this.user.dob != '' && this.user.mobileNumber != '' && this.user.panNumber != '' && this.user.aadharNumber != '' && this.user.salaryRange != '' && this.user.userAddress != '' && this.user.cardType != '') && this.user.name != null && this.user.email != null && this.user.dob != null && this.user.mobileNumber != null && this.user.panNumber != null && this.user.aadharNumber != null && this.user.salaryRange != null && this.user.userAddress != null && this.user.cardType != null) {
      this.service.doApplyForCreditCard(this.user).subscribe(
        data => {
          console.log(data);
          if (data.status == "ok") {
            console.log("...Your Application Successfully Submitted...");
            alert("...Your Application Successfully Submitted...");
            this.msg = "...Your Application Successfully Submitted...";
          }
          else {
            this.msg = "User Already Exist with same card";
          }
        },
        error => {
          console.log(error);

        }
      )
    }

    else {
      this.msg = "All fields are mandatory...";
    }
  }

}
