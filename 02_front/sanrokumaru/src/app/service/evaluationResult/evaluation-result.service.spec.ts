import { TestBed, inject } from '@angular/core/testing';

import { EvaluationResultService } from './evaluation-result.service';

describe('EvaluationResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvaluationResultService]
    });
  });

  it('should be created', inject([EvaluationResultService], (service: EvaluationResultService) => {
    expect(service).toBeTruthy();
  }));
});
