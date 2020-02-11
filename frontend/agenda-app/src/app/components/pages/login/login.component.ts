import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    email: 'admin@user.com',
    password: 'secret'
  };

  showMessageError: boolean = false;

  constructor(private authService: AuthService, private router: Router) { //Injenção de dependência automática

  }

  ngOnInit() {

  }

  submit(){
    this.authService.login(this.credentials)
        .subscribe((data) => {
            this.router.navigate(['contacts/list']);
        }, () => this.showMessageError = true);
    return false;
  }
}
