import { Component, OnInit } from '@angular/core';
import {isUndefined} from "util";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    private nav;
    private profiledata;

  constructor() { }

  ngOnInit() {

      const auth = localStorage.getItem('profile');
      const authparsed = JSON.parse(auth);

      if (authparsed !== null || authparsed !== isUndefined) {
          this.nav = authparsed.activated;
          this.profiledata = authparsed;
      } else {
          this.nav = '';
      }
  }

}
