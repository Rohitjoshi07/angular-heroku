import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';
import { User1 } from '../user1';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user1 = new User1("", "");
  msg = '';

  constructor(private service: LoginServiceService, private router: Router) { }

  ngOnInit(): void {

  }

  public loginNow() {
    // console.log(this.user);
    if ((this.user1.email != '' && this.user1.password != '') && this.user1.email != null && this.user1.password != null) {
      this.service.doLogin(this.user1).subscribe(
        data => {
          console.log("Response Received", data)
          if (data.status == "ok") {
            this.msg = "Login Success"
            this.router.navigate(['/dashboard']);
          }
          else {
            this.msg = "Invalid Credientials, Please Login Again";
            this.router.navigate(['/login']);
          }

        },
        error => {
          console.log("Exception Occured")
          this.msg = "Invalid Credientials, Please Login Again"
        }
      )
    }
    else {
      this.msg = "All fields are mandatory..."
    }
  }




}
