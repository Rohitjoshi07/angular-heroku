import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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
    Swal.fire({
      title: "Are you Sure",
      text: "This will be Logged Out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((isOkay) => {
      if (isOkay.isConfirmed) {
        this.loginSer.logout();
        // location.reload()
        window.setTimeout(function () { location.reload() }, 500)
      }
      else if (isOkay.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'You will Continue..',
          'error'
        ).then((isError) => {
          if (isError) {
            window.setTimeout(function () { location.reload() }, 100);
          }
        })

      }
    })

  }
}
