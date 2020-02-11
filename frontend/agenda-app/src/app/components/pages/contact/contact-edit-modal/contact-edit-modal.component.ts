import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'contact-edit-modal',
  templateUrl: './contact-edit-modal.component.html',
  styleUrls: ['./contact-edit-modal.component.css']
})
export class ContactEditModalComponent implements OnInit {

  contact = {
    'name': '',
    'email': '',
    'phone_number': '',
    'company': ''
  };

  _contactId: number;

  @ViewChild(ModalComponent) modal: ModalComponent;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  @Input()
  set contactId(value){
      this._contactId = value;
      if(this._contactId){
          const token = window.localStorage.getItem('token');
          this.http.get<{data: any}>(`http://localhost:8000/api/contacts/${value}`, {
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          }).subscribe((response) => this.contact = response.data)
      }
  }

  submit(){
      const token = window.localStorage.getItem('token');
      this.http
          .put(`http://localhost:8000/api/contacts/${this._contactId}`, this.contact, {
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
