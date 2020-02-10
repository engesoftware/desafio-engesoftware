import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

declare let $;

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Array<{id: number, name: string, email: boolean, phone_number: string, company: string, created_at: {date: string}}>;

  contact = {
    'name': '',
    'email': '',
    'phone_number': '',
    'company': ''
  };

  constructor(private http: HttpClient) { console.log('contact list'); }

  ngOnInit() {
    this.getContacts();
  }

  submit(){
    const token = window.localStorage.getItem('token');
    this.http
      .post('http://localhost:8000/api/contacts', this.contact, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).subscribe((category) => {
      console.log(category);
      this.getContacts();
      $("#exampleModal").modal('hide')
    })
  }

  getContacts(){
    const token = window.localStorage.getItem('token');
    this.http
      .get<{data: Array<{id: number, name: string, email: boolean, phone_number: string, company: string, created_at: {date: string}}>}>
      ('http://localhost:8000/api/contacts', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).subscribe(response => this.contacts = response.data)
  }
}
