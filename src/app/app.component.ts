import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App!';

    ngOnInit() {

        let auth = localStorage.getItem('profile'),
            authparsed = JSON.parse(auth);

        if(authparsed !== null){
            this.nav = authparsed.activated;
        }else{
            this.nav = '';
        }


    }
}
