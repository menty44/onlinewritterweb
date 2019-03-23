import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import axios from 'axios';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public allProducts;
  public nav;
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    const auth = localStorage.getItem('profile');
    const authparsed = JSON.parse(auth);

    if (authparsed !== null || authparsed !== undefined) {
        this.nav = authparsed.activated;
    } else {
        this.nav = '';
}
    axios.get('http://46.101.189.75:8585/products')
          .then(response => {
              console.log('freddy', response.data);
              console.log('freddy', response.data.totalElements);
              localStorage.setItem('products', JSON.stringify(response.data.totalElements));

              this.allProducts = response.data;
          })
          .catch(error => {
              console.log(error);
          });
  }
}
