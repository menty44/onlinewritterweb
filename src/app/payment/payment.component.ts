import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public nav;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    
  }

}
