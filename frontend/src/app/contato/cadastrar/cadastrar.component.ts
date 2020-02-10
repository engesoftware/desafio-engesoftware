import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent {
  public form;

  private resp;

  constructor(private http:HttpClient,private router:Router) { 
    this.form=new FormBuilder().group({
      "nome":['',Validators.required],
      "email":['',[Validators.required,Validators.email]],
      "telefone":['',Validators.required],
      "empresa":['',Validators.required]
    });
  }

  salvar(){

      if(!this.form.valid){
        alert('Verifique os campos do formulário!');
      }else{
        const dados={
          "nome":this.form.controls['nome'].value,
          "email":this.form.controls['email'].value,
          "telefone":this.form.controls['telefone'].value,
          "empresa":this.form.controls['empresa'].value
        }
        this.http.post('http://localhost:8000/api/contato',dados,{ observe: 'response'}).subscribe(data=>{
          this.resp=data.body;
          if(this.resp.success){
            alert('Contato incluído com sucesso');
            this.router.navigate(['/contato']);
          }else{
            console.log(this.resp);
            alert("Erro ao efetuar a operação");
          }

        },(err)=>{
          console.log(err);
          if(err.error.message){
            alert(err.error.message);
          }else{
            alert('Erro ao efetuar a operação');
          }

      });
    
    }
  }

}
