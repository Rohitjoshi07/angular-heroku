import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User("", "", "");

  msg = '';


  constructor(private service: UserServiceService) {

  }
  ngOnInit(): void {
  }

  public registerNow() {
    // console.log(this.user);
    if ((this.user.email != '' && this.user.name != '' && this.user.password != '') && this.user.email != null && this.user.name != null && this.user.password != null) {
      this.service.doRegistration(this.user).subscribe(
        data => {
          console.log("Response Received", data)
          this.msg = "Registration Done Successfully"
        },
        error => {
          console.log("Exception Occured")
          this.msg = "Bad Request Try Again !!"
        }
      )
    }

    else {
      this.msg = "All fields are mandatory...";
    }
  }

}
