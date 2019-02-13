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
            let auth = localStorage.getItem('profile'),
                authparsed = JSON.parse(auth);

            if (authparsed !== null || authparsed !== isUndefined) {
                this.nav = authparsed.activated;
            }else{
                this.nav = '';
            }
        }

    logOut() {
        console.log('logout');
        localStorage.clear();
        window.location.href = '/';
    }


}
