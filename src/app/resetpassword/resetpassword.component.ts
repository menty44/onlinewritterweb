import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  public nav;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    const auth = localStorage.getItem('profile');
    const authparsed = JSON.parse(auth);

    if (authparsed !== null ) {
        this.nav = authparsed.activated;
    } else {
        this.nav = '';
    }
    // /** spinner starts on init */
    // this.spinner.show();
    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 500);
  }

}
