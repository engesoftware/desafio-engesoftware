import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactNewModalComponent } from './contact-new-modal.component';

describe('ContactNewModalComponent', () => {
  let component: ContactNewModalComponent;
  let fixture: ComponentFixture<ContactNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
