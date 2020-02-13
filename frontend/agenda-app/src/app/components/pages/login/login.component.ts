import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import { Router } from '@angular/router';
import {AuthService} from "../../../services/auth.service";
import {UserNewModalComponent} from "../user/user-new-modal/user-new-modal.component";
import {NotifyMessageService} from "../../../services/notify-message.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    email: 'admin@engesoftware.com.br',
    password: 'secret'
  };

  @ViewChild(UserNewModalComponent)
  userNewModal: UserNewModalComponent;

  showMessageError: boolean = false;

  constructor(private authService: AuthService, private router: Router, private notifyMessage: NotifyMessageService) { //Injenção de dependência automática

  }

  ngOnInit() {
      if (this.authService.getToken()){
          this.router.navigate(['contacts/list']);
      }
  }

  submit(){
      this.authService.login(this.credentials)
          .subscribe((data) => {
              this.router.navigate(['contacts/list']);
          }, () => this.showMessageError = true);
      return false;
  }

  showModalNewUser(){
      this.userNewModal.showModal();
  }

  onInsertSuccess(event: any) {
      console.log(event);
      this.notifyMessage.success("Usuário cadastrado com sucesso.");
      this.userNewModal.hideModal(event);
  }

  onInsertError(event: HttpErrorResponse) {
      console.log(event);
      this.notifyMessage.error('Erro ao cadastrar usuário. Tente novamente.');
      this.userNewModal.hideModal(event);
  }
}
