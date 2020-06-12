import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDeleteModalComponent } from './contact-delete-modal.component';

describe('ContactDeleteModalComponent', () => {
  let component: ContactDeleteModalComponent;
  let fixture: ComponentFixture<ContactDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
