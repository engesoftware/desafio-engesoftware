import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ContactNewModalComponent} from "../contact-new-modal/contact-new-modal.component";
import {ContactEditModalComponent} from "../contact-edit-modal/contact-edit-modal.component";
import {ContactDeleteModalComponent} from "../contact-delete-modal/contact-delete-modal.component";
import {AuthService} from "../../../../services/auth.service";
import {NotifyMessageService} from "../../../../services/notify-message.service";

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

  @ViewChild(ContactDeleteModalComponent)
  contactDeleteModal: ContactDeleteModalComponent;

  contactId: number;
  searchText: string;

  constructor(private http: HttpClient, private authService: AuthService, private notifyMessage: NotifyMessageService) { console.log('contact list'); }

  ngOnInit() {
      this.getContacts();
  }

  getContacts(){
      var strSearch = this.searchText ? `&search=${this.searchText}` : '';
      this.http.get<{data: Array<{id: number, name: string, email: boolean, phone_number: string, company: string, created_at: {date: string}}>}>
        (`http://localhost:8000/api/contacts?userId=${this.authService.me.id}${strSearch}`).subscribe(response => this.contacts = response.data)
  }

  showModalInsert(){
      this.contactNewModal.showModal();
  }

  showModalEdit(contactId: number) {
      this.contactId = contactId;
      this.contactEditModal.showModal();
  }

  showModalDelete(contactId: number) {
      this.contactId = contactId;
      this.contactDeleteModal.showModal();
  }

  onInsertSuccess($event: any) {
      this.notifyMessage.success('Contato cadastrado com sucesso.');
      this.getContacts();
  }

  onInsertError($event: HttpErrorResponse) {
      this.notifyMessage.success('Erro ao cadastrar contato.');
      console.log($event);
  }

  onEditSuccess($event: any) {
      this.notifyMessage.success('Contato atualizado com sucesso.');
      this.getContacts();
  }

  onEditError($event: HttpErrorResponse) {
      this.notifyMessage.success('Erro ao atualizar contato.');
  }

  onDeleteSuccess($event: any) {
      this.notifyMessage.success('Contato excluído com sucesso.');
      this.getContacts();
  }

  onDeleteError($event: HttpErrorResponse) {
      this.notifyMessage.success('Erro ao excluir contato.');
  }

  search(search) {
      this.searchText = search;
      this.getContacts();
  }
}
