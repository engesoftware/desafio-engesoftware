import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }
  public email = '';
  public senha = '';
  ngOnInit() {
  }

  logar() {    
    this.auth.authUser(this.email, this.senha);
  }
}
