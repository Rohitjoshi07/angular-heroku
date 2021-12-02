import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credit } from '../credit';
import { Salary } from '../Salary';
import { CreditCardService } from '../credit-card.service';
import { User2 } from '../user2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css']
})
export class ApplyFormComponent implements OnInit {

  status: any;
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

  cardName = '';
  candidateEmail: any;
  // data="";
  // m = '';

  constructor(private service: CreditCardService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cardName = this.route.snapshot.params.id;
    console.log(this.cardName);
    this.candidateEmail = localStorage.getItem('username');
    // this.data=this.cardName;

  }

  public applyNow() {
    Swal.fire({
      title: "Are you Sure",
      text: "This form will be Submitted",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes, Proced it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((isOkay) => {
      if (isOkay.isConfirmed) {
        if ((this.user.name != '' && this.user.dob != '' && this.user.mobileNumber != '' && this.user.panNumber != '' && this.user.aadharNumber != '' && this.user.salaryRange != '' && this.user.userAddress != '') && this.user.name != null && this.user.dob != null && this.user.mobileNumber != null && this.user.panNumber != null && this.user.aadharNumber != null && this.user.salaryRange != null && this.user.userAddress != null) {
          this.user.cardType = this.cardName;
          this.user.email = this.candidateEmail
          console.log(this.user);
          this.service.addCreditDetails(this.user).subscribe(
            (data: any) => {
              console.log("Add credit card-", data);
              if (data.status == "false") {
                Swal.fire({
                  title: data.message,
                  icon: "error"
                }).then((isOkay) => {
                  if (isOkay) {
                    window.setTimeout(function () { location.reload() }, 500)
                  }
                })
              }
              if (data.status == "true") {
                this.service.doApplyForCreditCard(this.user).subscribe(
                  data => {
                    console.log("Add credit card-", data);
                    if (data.status == "ok") {
                      this.status = data.status;
                      console.log("...Your Application Successfully Submitted...");
                      Swal.fire({
                        title: "Your Application Successfully Submitted",
                        icon: "success"
                      }).then((isOkay) => {
                        if (isOkay) {
                          setTimeout("window.location.href = '/Ace';", 500)
                        }
                      });
                      // alert("...Your Application Successfully Submitted...");
                      // this.msg = "...Your Application Successfully Submitted...";
                      // this.router.navigate(['/Ace'])
                    }
                    else if (data.status == "false") {
                      Swal.fire({
                        title: data.message,
                        icon: "error"
                      }).then((isOkay) => {
                        if (isOkay) {
                          window.setTimeout(function () { location.reload() }, 500)
                        }
                      })
                    }
                    else {
                      Swal.fire({
                        title: "User Already Exist with same card",
                        icon: "error"
                      }).then((isOkay) => {
                        if (isOkay) {
                          window.setTimeout(function () { location.reload() }, 500)
                        }
                      })
                      //this.msg = "User Already Exist with same card";
                    }
                  },
                  error => {
                    console.log(error);
                  }
                )
              }
            }
          )
        }
        else {
          Swal.fire({
            title: "All fields are mandatory.",
            icon: "error"
          }).then((isOkay) => {
            if (isOkay) {
              window.setTimeout(function () { location.reload() }, 500)
            }
          })
          // this.msg = "All fields are mandatory...";
        }
      }

      else if (isOkay.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Data Not Submitted:)',
          'error'
        ).then((isError) => {
          if (isError) {
            window.setTimeout(function () { location.reload() }, 500);
          }
        })

      }
    })
  }
}
