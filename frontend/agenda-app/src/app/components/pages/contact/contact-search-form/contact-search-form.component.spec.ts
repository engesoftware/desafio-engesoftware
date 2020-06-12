import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSearchFormComponent } from './contact-search-form.component';

describe('ContactSearchFormComponent', () => {
  let component: ContactSearchFormComponent;
  let fixture: ComponentFixture<ContactSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
