import { Component, OnInit } from '@angular/core';
import swal from 'SweetAlert';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    private totalusers;
    private totalpurchases;
    private totalpayments;
    private todaypurchases;
    private messagessent;
    private customerissues;

  constructor() { }

  ngOnInit() {
    this.totalusers = localStorage.getItem('totalusers');
    this.totalpurchases = localStorage.getItem('totalpurchases');
    this.totalpayments = localStorage.getItem('totalpayments');
    this.todaypurchases = localStorage.getItem('todaypurchases');
    this.messagessent = localStorage.getItem('messagessent');
    this.customerissues = localStorage.getItem('customerissues');
  }

  sweet() {
      swal("Good job!", "You clicked the button!", "success");
  }

}
