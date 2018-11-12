import { TestBed, inject } from '@angular/core/testing';

import { if1003EvaluationResultService } from './if1003-evaluation-result.service';

describe('if1003EvaluationResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [if1003EvaluationResultService]
    });
  });

  it('should be created', inject([if1003EvaluationResultService], (service: if1003EvaluationResultService) => {
    expect(service).toBeTruthy();
  }));
});
