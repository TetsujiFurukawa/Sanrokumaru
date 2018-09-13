import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc1003EvaluationResultListComponent } from './sc1003-evaluation-result-list.component';

describe('Sc1003EvaluationResultListComponent', () => {
  let component: Sc1003EvaluationResultListComponent;
  let fixture: ComponentFixture<Sc1003EvaluationResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sc1003EvaluationResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sc1003EvaluationResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
