import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ContactNewModalComponent} from "../contact-new-modal/contact-new-modal.component";
import {ContactEditModalComponent} from "../contact-edit-modal/contact-edit-modal.component";

declare let $;

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Array<{id: number, name: string, email: boolean, phone_number: string, company: string, created_at: {date: string}}>;

  @ViewChild(ContactNewModalComponent)
  contactNewModal: ContactNewModalComponent;

  @ViewChild(ContactEditModalComponent)
  contactEditModal: ContactEditModalComponent;

  contactId: number;

  constructor(private http: HttpClient) { console.log('contact list'); }

  ngOnInit() {
      this.getContacts();
  }

  getContacts(){
      const token = window.localStorage.getItem('token');
      this.http.get<{data: Array<{id: number, name: string, email: boolean, phone_number: string, company: string, created_at: {date: string}}>}>
        ('http://localhost:8000/api/contacts', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        }).subscribe(response => this.contacts = response.data)
  }

  showModalInsert(){
      this.contactNewModal.showModal();
  }

  showModalEdit(contactId: number) {
      this.contactId = contactId;
      this.contactEditModal.showModal();
  }

  onInsertSuccess($event: any) {
      console.log($event);
      this.getContacts();
  }

  onInsertError($event: HttpErrorResponse) {
      console.log($event);
  }

  onEditSuccess($event: any) {
      console.log($event);
      this.getContacts();
  }

  onEditError($event: HttpErrorResponse) {
      console.log($event);
  }
}
