import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { Router } from '@angular/router';
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
                this.msg = "Registration Done Successfully";
                alert("...Your Registration Done Successfully...");
                this.router.navigate(['/dashboard'])
              }
            )
          }
          else {
            this.msg = "User Already Exist. Please Login";
            window.location.reload();
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
      this.msg = "All fields are mandatory...";
    }
  }

}
