import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {

  }

}
