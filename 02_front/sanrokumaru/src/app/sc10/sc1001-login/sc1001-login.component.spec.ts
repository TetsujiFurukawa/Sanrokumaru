import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc1001LoginComponent } from './sc1001-login.component';

describe('Sc1001LoginComponent', () => {
  let component: Sc1001LoginComponent;
  let fixture: ComponentFixture<Sc1001LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Sc1001LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sc1001LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
