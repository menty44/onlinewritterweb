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
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    axios.get('http://localhost:8080/products')
          .then(response => {
              console.log('freddy', response.data);
              console.log('freddy', response.data.totalElements);
              localStorage.setItem('products', JSON.stringify(response.data.totalElements));

              this.allProducts = response.data;

              setTimeout(() => {
                  /** spinner ends after 5 seconds */
                  this.spinner.hide();
              }, 200);
          })
          .catch(error => {
              console.log(error);
          });
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    });
  }
}
