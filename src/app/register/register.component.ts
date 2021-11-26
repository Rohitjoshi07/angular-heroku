import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User("", "");
  repassword: any;
  status: any;

  msg = '';


  constructor(private service: UserServiceService, private router: Router) {

  }
  ngOnInit(): void {
  }

  public registerNow() {
    if ((this.user.username != '' && this.user.password != '') && this.user.username != null && this.user.password != null) {
      this.service.checkUserExist(this.user).subscribe(
        data => {
          console.log(data);
          if (data.status == "ok") {
            this.service.doRegistration(this.user).subscribe(
              data => {
                console.log("Response Received", data)
                this.status = data.status;
                // this.msg = "Registration Done Successfully";
                Swal.fire({
                  title: "Your Registration Done",
                  icon: "success"
                }).then((isOkay) => {
                  if (isOkay) {
                    setTimeout("window.location.href = '/dashboard';", 500)
                  }
                })
                // alert("...Your Registration Done Successfully...");
                // this.router.navigate(['/dashboard'])
              }
            )
          }
          else {
            Swal.fire({
              title: "User Already Exist. Please Login",
              icon: "error"
            }).then((isOkay) => {
              if (isOkay) {
                window.setTimeout(function () { location.reload() }, 500)
              }
            })
            // this.msg = "User Already Exist. Please Login";
            // window.location.reload();

          }
        }
      )

      // this.service.doRegistration(this.user).subscribe(
      //   data => {
      //     console.log("Response Received", data)
      //     if (data.status == "Bad-Request") {
      //       this.msg = "User Already Exist. Please Login";
      //     }
      //     else {
      //       this.msg = "Registration Done Successfully";
      //     }

      //   },
      //   error => {
      //     console.log("Exception Occured")
      //     this.msg = "Bad Request Try Again !!"
      //   }
      // )
    }

    else {
      Swal.fire({
        title: "All fields are mandatory...",
        icon: "error"
      }).then((isOkay) => {
        if (isOkay) {
          window.setTimeout(function () { location.reload() }, 500)
        }
      })
      // this.msg = "All fields are mandatory...";
    }
  }
}
