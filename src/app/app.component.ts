import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Demo';
  public displayDashboard = false;
  constructor(private loginSer: LoginServiceService) {
  }

  ngOnInit() {
    this.displayDashboard = this.loginSer.isLoggedIn();
  }

  logoutUser() {
    this.loginSer.logout();
    location.reload()
  }
}
