import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { isUndefined } from 'util';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private resp;

  constructor(private http: HttpClient, private router: Router) { }

  public checkToken(token){
    const headers =  new HttpHeaders({ 
      'Content-Type': 'text/plain'
    });
    const dados = {
      'token':token
    };
    this.http.post('http://localhost:8000/api/checktoken',dados,{observe: 'response', headers:headers}).pipe(map((data)=>{
      //this.resp=data;
      //if(this.resp.body.success){
        this.resp=data.body;
        if (!isUndefined(this.resp.success)) {
          this.setToken(this.resp.success);     
        }else{
          return throwError("Erro");
        }   
      //}else{
        //console.log(data);
        //alert('Erro ao efetuar a operação');
      //}
    }),catchError((err)=>{
          
      console.log(err);
      if(err.error.message){
        alert(err.error.message);
      }else{
        alert('Erro ao efetuar a operação');
      }

      return of(false);
    })).subscribe();
    return this.resp.body.success;
  }

  public getToken() {
    return sessionStorage.getItem('currentUser');
  }

  public setToken(data: any) {
    return sessionStorage.setItem('currentUser', data);
  }

  public isAuth() {
    const a = this.getToken();
    if (a !== '' && a != null && a !== undefined) {
      return true;
    }
    return false;
  }

  public authUser(email: string, password: string): Observable<any> {
    const dados = {
      'email': email,
      'password': password
    }
    const headers =  new HttpHeaders({ 
      'Content-Type': 'text/plain'
    });

    this.http.post('http://localhost:8000/api/login', dados, { observe: 'response',headers: headers })
      .pipe(
         catchError((err, caught) => {
          if (err.status === 401) {
            alert("Usuário ou senha inválida!");
            return throwError(err.statusText);
          } else {
            alert("Erro ao efetuar a operação");
            console.log(err);
            console.log(caught);
          }
          return throwError(err.statusText);
        }), 
        map(data => {
          this.resp = data;
          if (this.resp.body.success) {
            this.setToken(this.resp.body.success.token);
            this.router.navigate(['/']);
          }else if (this.resp.body.error) {
            alert(this.resp.body.error);
          } else {
            alert('Token Não Gerado!');
            console.log(data.body);
          }
        })

      ).subscribe();

    return this.resp;
  }

  logoff(){
    sessionStorage.clear();
  
  }
}
