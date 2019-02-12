import {Component, OnInit} from '@angular/core';

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

            if(authparsed !== null){
                this.nav = authparsed.activated;
            }else{
                this.nav = '';
            }
        }

    // ngOnInit() {
    //
    //     let auth = localStorage.getItem('profile'),
    //         authparsed = JSON.parse(auth);
    //
    //     if(authparsed !== null){
    //         this.nav = authparsed.activated;
    //     }else{
    //         this.nav = '';
    //     }
    // }
}
