import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as _ from 'lodash';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {isUndefined} from 'util';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public name: string;
    public email: any;
    public password: any;
    public nav;
    public oluoch;
    private clickMessage: string;



    constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {

      const auth = localStorage.getItem('profile');
      const authparsed = JSON.parse(auth);

      if (authparsed !== null || authparsed !== isUndefined) {
          this.nav = authparsed.activated;
      } else {
          this.nav = '';
      }


  }

    onClickMe() {
        /** spinner starts on init */
        this.spinner.show();
        this.clickMessage = 'You are my hero!';
        const k = this.email;
        const m = this.password;
        console.log(k);
        console.log(m);

        // Make a request for a user login
        axios.get('http://46.101.189.75:8585/login?email=' + k + '&password=' + m)
            .then(response => {
                console.log('freddy', response.data);
                console.log('freddy', response.data.activated);
                localStorage.setItem('profile', JSON.stringify(response.data));
                this.oluoch = response.data;
                window.location.href = '/';
                setTimeout(() => {
                  /** spinner ends after 5 seconds */
                  this.spinner.hide();
                }, 500);
            })
            .catch(error => {
                console.log(error);
            });
    }

}
