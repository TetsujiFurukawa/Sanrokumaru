import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDatepickerYearComponent } from './mat-datepicker-year.component';

describe('MatDatepickerYearComponent', () => {
  let component: MatDatepickerYearComponent;
  let fixture: ComponentFixture<MatDatepickerYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatDatepickerYearComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDatepickerYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
