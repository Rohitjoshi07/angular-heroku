import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // u = {
  //   email: "",
  //   name: "",
  //   password: ""
  // }
  user = new User("", "", "");

  // m: any


  constructor(private service: UserServiceService) {

  }
  ngOnInit(): void {
  }

  public registerNow() {
    console.log(this.user);

    this.service.doRegistration(this.user).subscribe(
      data => console.log("Response Received", data),
      error => console.log("Exception Occured")
    )



  }

}
