import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    email: 'admin@user.com',
    password: 'secret'
  }

  constructor(private http: HttpClient) { //Injenção de dependência automática

  }

  ngOnInit() {

  }

  submit(){
    this.http.post<any>('http://localhost:8000/api/login', this.credentials)
      .subscribe((data) => {
        console.log(data);
        const token = data.token;
        this.http.get('http://localhost:8000/api/contacts', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).subscribe((data) => console.log(data))
      });
    return false;
  }

}
