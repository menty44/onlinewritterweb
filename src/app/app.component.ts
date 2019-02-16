import {Component, OnInit} from '@angular/core';
import {isUndefined} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My First Angular App!';
    public nav;

    constructor() { }

    ngOnInit () {
            const auth = localStorage.getItem('profile');
            const authparsed = JSON.parse(auth);

            if (authparsed !== null || authparsed !== isUndefined) {
                this.nav = authparsed.activated;
            } else {
                this.nav = '';
            }
        }

    logOut() {
        console.log('logout');
        // localStorage.clear();
        localStorage.setItem('profile', '{"activated":"0"}');
        // window.location.href = '/';
    }


}
