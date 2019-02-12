import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as _ from 'lodash';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {isUndefined} from "util";
// import allResolved = Q.allResolved;

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



    constructor() { }

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
        this.clickMessage = 'You are my hero!';
        const k = this.email;
        const m = this.password;
        console.log(k);
        console.log(m);

        // Make a request for a user login
        axios.get('http://localhost:8080/login?email=' + k + '&password=' + m)
            .then(response => {
                console.log('freddy', response.data);
                console.log('freddy', response.data.activated);
                localStorage.setItem('profile', JSON.stringify(response.data));
                this.oluoch = response.data;
                window.location.href = '/';
            })
            .catch(error => {
                console.log(error);
            });
    }

}
