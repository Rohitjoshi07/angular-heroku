import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardserviceService } from '../dashboardservice.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: DashboardserviceService) { }
  dash: any;
  cards: Array<{ creditCardName: string, salaryRange: string, interestRate: any, repaymentTime: any, creditCardTitle: string, creditCardFeatures: string, creditCardOtherFeatures: string }> = Array();
  ngOnInit(): void {
    this.getDashboardDetails();
  }
  getDashboardDetails() {
    this.service.getDetails().subscribe(
      (data: any) => {
        this.cards = data;
        console.log(this.cards);

      }
    )
  }
}
