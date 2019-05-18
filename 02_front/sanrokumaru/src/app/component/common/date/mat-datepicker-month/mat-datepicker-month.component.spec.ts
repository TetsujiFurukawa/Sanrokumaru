import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDatepickerMonthComponent } from './mat-datepicker-month.component';

describe('MatDatepickerMonthComponent', () => {
  let component: MatDatepickerMonthComponent;
  let fixture: ComponentFixture<MatDatepickerMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDatepickerMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDatepickerMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
