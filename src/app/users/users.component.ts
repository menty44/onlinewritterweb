import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import axios from 'axios';
// import swal from 'SweetAlert';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private clickMessage: string;
  private allUsers: any;

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
              }, 200);
          })
          .catch(error => {
              console.log(error);
          });
  }

  deleteUser() {
      // swal({
      //     title: "Are you sure?",
      //     text: "Once deleted, you will not be able to reverse the operation!",
      //     icon: "warning",
      //     buttons: true,
      //     dangerMode: true,
      // })
      //     .then((willDelete) => {
      //         if (willDelete) {
      //             swal("Selected User has been deleted!", {
      //                 icon: "success",
      //             });
      //         } else {
      //             swal("Selected User has not been deleted!");
      //         }
      //     });
  }

}
