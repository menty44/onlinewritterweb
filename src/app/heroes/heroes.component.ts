import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import axios from 'axios';
import * as _ from 'lodash';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstormbbb'
  };
  private fred: string;
  private oluoch: any;

  constructor() { }

  ngOnInit() {

      let auth = localStorage.getItem('profile'),
          authparsed = JSON.parse(auth);

      if(authparsed !== null){
        this.nav = authparsed.activated;
      }else{
        this.nav = '';
      }


    this.fred = 'hello world';
    // Make a request for a user
    axios.get('http://localhost:8080/userss')
      .then(response => {
        console.log('freddy', response.data);
          this.oluoch = response.data;
        // _.forEach(response.data, (value, key) => {
        //   console.log('lodash', value.firstname);
        // });
        // const mars = _.map(response.data, 'firstname');
        // console.log('lodahs map', mars);
        // this.oluoch = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }

}
