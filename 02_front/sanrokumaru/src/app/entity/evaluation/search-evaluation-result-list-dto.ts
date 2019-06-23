import { SearchEvaluationResultDto } from './search-evaluation-result-dto';

export class SearchEvaluationResultListDto {
  pageIndex: number;
  resultsLength: number;
  searchEvaluationResultDtos: SearchEvaluationResultDto[];
}
