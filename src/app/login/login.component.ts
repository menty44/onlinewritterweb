import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as _ from 'lodash';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import allResolved = Q.allResolved;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public name: String;
    public email: any;
    public password: any;



    constructor() { }

  ngOnInit() {

      let auth = localStorage.getItem('profile'),
          authparsed = JSON.parse(auth);

      if(authparsed !== null){
          this.nav = authparsed.activated;
      }else{
          this.nav = '';
      }


  }

    onClickMe() {
        this.clickMessage = 'You are my hero!';
        let k = this.email;
        let m = this.password;
        console.log(k);
        console.log(m);

        // Make a request for a user login
        axios.get('http://localhost:8080/login?email='+k+'&password='+m)
            .then(response => {
                console.log('freddy', response.data);
                console.log('freddy', response.data.activated);
                localStorage.setItem('profile', JSON.stringify(response.data));
                this.oluoch = response.data;
                //this.nav = response.data.activated;
                window.location.href = '/'; //relative to domain
            })
            .catch(error => {
                console.log(error);
            });
    }

}
