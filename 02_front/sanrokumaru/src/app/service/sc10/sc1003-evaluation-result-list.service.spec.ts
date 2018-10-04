import { TestBed, inject } from '@angular/core/testing';

import { Sc1003EvaluationResultListService } from './sc1003-evaluation-result-list.service';

describe('Sc1003EvaluationResultListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Sc1003EvaluationResultListService]
    });
  });

  it('should be created', inject([Sc1003EvaluationResultListService], (service: Sc1003EvaluationResultListService) => {
    expect(service).toBeTruthy();
  }));
});
