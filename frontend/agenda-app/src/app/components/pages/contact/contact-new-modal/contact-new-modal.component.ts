import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'contact-new-modal',
  templateUrl: './contact-new-modal.component.html',
  styleUrls: ['./contact-new-modal.component.css']
})
export class ContactNewModalComponent implements OnInit {

  contact = {
      'name': '',
      'email': '',
      'phone_number': '',
      'company': ''
  };

  @ViewChild(ModalComponent) modal: ModalComponent;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  submit(){
      const token = window.localStorage.getItem('token');
      this.http
          .post('http://localhost:8000/api/contacts', this.contact, {
              headers: {
                'Authorization': `Bearer ${token}`
              }
          }).subscribe((contact) => {
              this.onSuccess.emit(contact)
              this.modal.hide();
          }, error => this.onError.emit(error));
  }

  showModal() {
      this.modal.show();
  }

  hideModal($event: Event) {
      //fazer algo quando o modal for fechado
      console.log($event);
  }

}
