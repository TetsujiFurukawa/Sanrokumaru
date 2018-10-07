import { TestBed, inject } from '@angular/core/testing';

import { Sc1003EvaluationResultService } from './sc1003-evaluation-result.service';

describe('Sc1003EvaluationResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Sc1003EvaluationResultService]
    });
  });

  it('should be created', inject([Sc1003EvaluationResultService], (service: Sc1003EvaluationResultService) => {
    expect(service).toBeTruthy();
  }));
});
