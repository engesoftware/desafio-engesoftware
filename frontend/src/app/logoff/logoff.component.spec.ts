import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoffComponent } from './logoff.component';

describe('LogoffComponent', () => {
  let component: LogoffComponent;
  let fixture: ComponentFixture<LogoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
