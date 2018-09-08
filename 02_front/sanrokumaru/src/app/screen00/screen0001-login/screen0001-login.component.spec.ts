import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen0001LoginComponent } from './screen0001-login.component';

describe('Screen0001LoginComponent', () => {
  let component: Screen0001LoginComponent;
  let fixture: ComponentFixture<Screen0001LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen0001LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen0001LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
