import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'user-new-modal',
  templateUrl: './user-new-modal.component.html',
  styleUrls: ['./user-new-modal.component.css']
})
export class UserNewModalComponent implements OnInit {

  user = {
      'name': '',
      'email': '',
      'password': ''
  };

  @ViewChild(ModalComponent) modal: ModalComponent;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
  }

  submit(){
    this.http
        .post('http://localhost:8000/api/users', this.user)
        .subscribe((user) => {
            this.onSuccess.emit(user)
            this.modal.hide();
        }, error => this.onError.emit(error));
  }

  showModal() {
      this.modal.show();
  }

  hideModal($event) {
      //fazer algo quando o modal for fechado
      console.log($event);
      this.modal.hide();
  }
}
