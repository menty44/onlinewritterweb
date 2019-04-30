import { Component, OnInit } from '@angular/core';
// import swal from 'sweetalert';
import axios from 'axios';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    private totalusers;
    private totalpurchases;
    private totalpayments;
    private todaypurchases;
    private messagessent;
    private customerissues;
    private products;
    private allUsers: any;

  constructor() { }

  ngOnInit() {
    this.totalusers = localStorage.getItem('totalusers');
    this.totalpurchases = localStorage.getItem('totalpurchases');
    this.totalpayments = localStorage.getItem('totalpayments');
    this.todaypurchases = localStorage.getItem('todaypurchases');
    this.messagessent = localStorage.getItem('messagessent');
    this.products = localStorage.getItem('products');

    const totalusers = this.totalusers;
    const totalpurchases = this.todaypurchases;
    const totalpayments = this.totalpayments;
    const todaypurchases = this.todaypurchases;
    const messagessent = this.messagessent;
    const products = this.products;

    if (!totalusers && !totalpurchases && !totalpayments && !todaypurchases && !messagessent && !products) {
      // swal('hapana!', 'ba!', 'error');
    } else {
      // swal('Good job!', 'You clicked the button!', 'success');
      axios.get('http://3.14.152.255:9090/users')
          .then(response => {
              console.log('freddy', response.data);
              console.log('freddy', response.data.totalElements);
              localStorage.setItem('totalusers', JSON.stringify(response.data.totalElements));

              this.totalusers = response.data.totalElements;
          })
          .catch(error => {
              console.log(error);
          });

      axios.get('http://3.14.152.255:9090/products')
          .then(response => {
              console.log('freddy', response.data);
              console.log('freddy', response.data.totalElements);
              localStorage.setItem('products', JSON.stringify(response.data.totalElements));

              this.products = response.data.totalElements;
          })
          .catch(error => {
              console.log(error);
          });
    }
  }

  sweet() {
  }

}
