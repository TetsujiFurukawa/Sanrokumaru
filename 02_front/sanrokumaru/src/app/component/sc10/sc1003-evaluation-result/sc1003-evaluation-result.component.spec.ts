import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc1003EvaluationResultComponent } from './sc1003-evaluation-result.component';

describe('Sc1003EvaluationResultComponent', () => {
  let component: Sc1003EvaluationResultComponent;
  let fixture: ComponentFixture<Sc1003EvaluationResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Sc1003EvaluationResultComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sc1003EvaluationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
