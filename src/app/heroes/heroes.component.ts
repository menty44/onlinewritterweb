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
    this.fred = 'hello world';
    // Make a request for a user with a given ID
    axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
      .then(response => {
        console.log(response.data);
        _.forEach(response.data, (value, key) => {
          console.log('lodash', value.title);
        });
        const mars = _.map(response.data, 'title');
        console.log('lodahs map', mars);
        this.oluoch = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }

}
