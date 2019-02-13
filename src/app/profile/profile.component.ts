import { Component, OnInit } from '@angular/core';
import {isUndefined} from 'util';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    private nav;
    private profileda;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
      /** spinner starts on init */
      this.spinner.show();
      const auth = localStorage.getItem('profile');
      const authparsed = JSON.parse(auth);

      if (authparsed !== null || authparsed !== isUndefined) {
          this.nav = authparsed.activated;
          this.profiledata = authparsed;
          setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
          });
      } else {
          this.nav = '';
      }
  }

}
