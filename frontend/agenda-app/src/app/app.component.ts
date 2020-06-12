import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import pace from 'pace';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    title = 'app';

    ngOnInit(): void {
        pace.start({
            document: false
        })
    }
    constructor(public authService: AuthService) {

    }

    canShowNavBar(){
        return this.authService.isAuth();
    }
}
