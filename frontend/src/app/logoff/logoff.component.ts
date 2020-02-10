import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.scss']
})
export class LogoffComponent{

  constructor(private auth:AuthService,private router: Router) { 
    this.auth.logoff();
    this.router.navigate(['/']);
  }

}
