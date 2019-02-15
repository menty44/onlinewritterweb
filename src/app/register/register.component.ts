import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import axios from 'axios';
import * as _ from 'lodash';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {isUndefined} from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    public firstname: any;
    public lastname: any;
    public mobile: any;
    public gender: any;
    public email: any;
    public password: any;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {

  }

  createUser() {

    /** spinner starts on init */
    this.spinner.show();
    const firstname = this.firstname;
    const lastname = this.lastname;
    const mobile = this.mobile;
    const gender = this.gender;
    const email = this.email;
    const password = this.password;
    console.log(firstname);
    console.log(lastname);
    console.log(mobile);
    console.log(gender);
    console.log(email);
    console.log(password);

    // Make a request for a user login
    axios.post('http://localhost:8080/newshopper?firstname='+firstname+'&lastname='+lastname+'&mobile='+mobile+'&email='+email+'&gender='+gender+'&password='+password)
        .then(response => {

          window.location.href = '/users';
          setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
          }, 200);
        })
        .catch(error => {
          console.log(error);
        });
  }

}
