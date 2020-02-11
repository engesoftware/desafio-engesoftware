import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'contact-delete-modal',
  templateUrl: './contact-delete-modal.component.html',
  styleUrls: ['./contact-delete-modal.component.css']
})
export class ContactDeleteModalComponent implements OnInit {

  contact = null;

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

  destroy(){
    const token = window.localStorage.getItem('token');
    this.http
      .delete(`http://localhost:8000/api/contacts/${this._contactId}`, {
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
