import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import axios from 'axios';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
      /** spinner starts on init */
      this.spinner.show();
      this.clickMessage = 'You are my hero!';

      // Make a request for a user login
      axios.get('http://localhost:8080/users')
          .then(response => {
              console.log('freddy', response.data);
              console.log('freddy', response.data.totalElements);
              localStorage.setItem('totalusers', JSON.stringify(response.data.totalElements));

              this.allUsers = response.data;

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
