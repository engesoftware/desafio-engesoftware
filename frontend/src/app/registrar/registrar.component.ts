import { AuthService } from './../auth.service';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { isUndefined } from 'util';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  
  public form;
  private resp;

  constructor(private httpC: HttpClient, private router: Router, private authservice: AuthService) { 
    this.form=new FormBuilder().group({
      "nome":['',Validators.required],
      "email":['',[Validators.required,Validators.email]],
      "password":['',Validators.required],
      "c_password": ['',[Validators.required, this.checkPasswords('password')]]
    });
  }

  ngOnInit() {}

  cadastrar(){

    if(!this.form.valid){
      alert('verifique os campos do formulário!');
      return false;
    }

    const dados = {"name":this.form.controls['nome'].value,"email":this.form.controls['email'].value,"password":this.form.controls['password'].value};

    this.httpC.post('http://localhost:8000/api/register',dados).subscribe(
      (data)=>{
        this.resp=data;
        if (this.resp.success) {
          console.log(this.resp.success);
          this.authservice.setToken(this.resp.success.token);          

          alert("Usuário cadastrado com sucesso");

          this.router.navigate(['/']);

        }else{
          console.log(data);
          alert('Erro ao efetuar a operação');
        }
      });
  }

  checkPasswords(field: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent && !!control.parent.value && control.value === control.parent.controls[field].value ? null : { senha: true };
    };
  }

}