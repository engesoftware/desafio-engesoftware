import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'contact-search-form',
  templateUrl: './contact-search-form.component.html',
  styleUrls: ['./contact-search-form.component.css']
})
export class ContactSearchFormComponent implements OnInit {

  search = '';

  @Output()
  onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  submit(){
      this.onSearch.emit(this.search);
      return false;
  }

}
