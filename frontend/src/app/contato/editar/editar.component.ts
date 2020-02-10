import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  @Input() id;
  @Input() nome;
  @Input() email;
  @Input() telefone;
  @Input() empresa;
  /* public nome: String="";
  public email: String="";
  public telefone="";
  public empresa="";
   */
  private resp;

  constructor(private http:HttpClient,private router:Router,private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  salvar(){
    if(this.nome.trim()==""){
      alert('preencha o nome');
    }else if(this.telefone.trim()==""){
      alert('preencha o telefone');
    }else if(this.email.trim()==""){
      alert('preencha o email');
    }else if(this.empresa.trim()==""){
      alert('preencha a empresa');
    }else{
      const dados={
        "nome":this.nome,
        "email":this.email,
        "telefone":this.telefone,
        "empresa":this.empresa,
      };
      
      var headers =  new HttpHeaders({
        'Content-Type': 'text/plain'
      });

      this.http.put('http://localhost:8000/api/contato/'+this.id,dados,{ observe: 'response', headers:headers}).subscribe(data=>{
        this.resp=data.body;
        if(this.resp.success){
          alert('Contato alterado com sucesso');
          
          
          top.location.href=this.router.url;
          this.activeModal.close();
        }else if(this.resp.error){
          alert(this.resp.error.message);
          console.log(this.resp.error);
        }else{
          alert("Erro ao efetuar a operação")
        }

      },err=>{
        this.resp=err;
        if(this.resp.error.message){
          alert(this.resp.error.message);
        }else{
          alert("Erro ao efetuar a operação");
          
        }
        console.log(err);
      })
    }
  }


}
