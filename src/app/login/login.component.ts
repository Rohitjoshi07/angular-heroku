import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';
import { User1 } from '../user1';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user1 = new User1("", "");
  msg = '';
  status: any;
  constructor(private service: LoginServiceService, private router: Router) { }

  ngOnInit(): void {

  }

  public loginNow() {
    // console.log(this.user);
    if ((this.user1.username != '' && this.user1.password != '') && this.user1.username != null && this.user1.password != null) {
      this.service.generateToken(this.user1).subscribe(
        (data: any) => {
          console.log(data);
          console.log(data.token);
          this.service.loginUser(data.token, this.user1.username);
          // window.location.href = "/dashboard"
          setTimeout("window.location.href = '/dashboard';", 500)
          // Swal.fire({
          //   title: "Login Success",
          //   icon: "success"
          // }).then((isOkay) => {
          //   if (isOkay) {
          //     setTimeout("window.location.href = '/dashboard';", 500)
          //   }
          // })
          // setTimeout("window.location.href = '/dashboard';", 2000)
        },
        error => {
          this.status = "Bad-Request";
          Swal.fire({
            title: "Please Login with Valid Credientials.",
            icon: "error"
          }).then((isOkay) => {
            if (isOkay) {
              window.setTimeout(function () { location.reload() }, 500)
            }
          })
          // this.msg = "...Please Login with Valid Credientials...";
          // this.router.navigate(['/login']);
          // window.setTimeout(function () { location.reload() }, 2000)
        }
      )
      // this.service.doLogin(this.user1).subscribe(
      //   data => {
      //     console.log("Response Received", data)
      //     if (data.status == "ok") {
      //       this.msg = "Login Success"
      //       this.router.navigate(['/dashboard']);
      //     }
      //     else {
      //       this.msg = "Invalid Credientials, Please Login Again";
      //       this.router.navigate(['/login']);
      //     }

      //   },
      //   error => {
      //     console.log("Exception Occured")
      //     this.msg = "Invalid Credientials, Please Login Again"
      //   }
      // )
    }
    else {
      // this.status = "Bad-Request";
      // this.msg = "...All fields are mandatory..."
      // window.location.reload();
      Swal.fire({
        title: "All fields are mandatory...",
        icon: "error"
      }).then((isOkay) => {
        if (isOkay) {
          window.setTimeout(function () { location.reload() }, 500)
        }
      })
    }
  }




}
