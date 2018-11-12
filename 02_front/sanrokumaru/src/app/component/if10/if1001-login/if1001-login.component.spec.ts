import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { If1001LoginComponent } from './if1001-login.component';

describe('if1001LoginComponent', () => {
  let component: If1001LoginComponent;
  let fixture: ComponentFixture<If1001LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [If1001LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(If1001LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
