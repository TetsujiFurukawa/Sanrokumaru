import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { If1003EvaluationResultComponent } from './if1003-evaluation-result.component';

describe('if1003EvaluationResultComponent', () => {
  let component: If1003EvaluationResultComponent;
  let fixture: ComponentFixture<If1003EvaluationResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [If1003EvaluationResultComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(If1003EvaluationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
