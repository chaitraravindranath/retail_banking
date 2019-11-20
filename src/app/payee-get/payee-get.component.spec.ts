import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeeGetComponent } from './payee-get.component';

describe('PayeeGetComponent', () => {
  let component: PayeeGetComponent;
  let fixture: ComponentFixture<PayeeGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayeeGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeeGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
