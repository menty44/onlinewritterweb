import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import axios from 'axios';
import * as _ from 'lodash';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {isUndefined} from 'util';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  public prodcode: any;
  public unitprice: any;
  public sellprice: any;
  public description: any;
  public stock: any;
  public nav;
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

  createProduct() {
    console.log('i have been clicked');
    const prodcode = this.prodcode;
    const unitprice = this.unitprice;
    const sellprice = this.sellprice;
    const description = this.description;
    const stock = this.stock;
    console.log('prodcode' + prodcode);
    console.log('name' + name);
    console.log('unitprice' +  unitprice);
    console.log('sellprice'  + sellprice);
    console.log('description' +  description);
    console.log('stock' +  stock);
    axios.post('http://3.14.152.255:9090/createprod?prodcode=' + prodcode +
      '&unitprice=' + unitprice +
      '&sellprice=' + sellprice +
      '&description=' + description +
      '&stock=' + stock +
      '&name=' + name)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log('my create prod error');
      });
  }
}
