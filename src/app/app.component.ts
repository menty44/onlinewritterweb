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

    onClickMe() {
        this.clickMessage = 'You are my hero!';
        const k = this.email;
        const m = this.password;
        console.log(k);
        console.log(m);

        // Make a request for a user login
        axios.get('http://localhost:8080/login?email=' + k + '&password=' + m)
            .then(response => {
                console.log('freddy', response.data);
                console.log('freddy', response.data.activated);
                localStorage.setItem('profile', JSON.stringify(response.data));
                this.oluoch = response.data;
                window.location.href = '/';
            })
            .catch(error => {
                console.log(error);
            });
    }
}
