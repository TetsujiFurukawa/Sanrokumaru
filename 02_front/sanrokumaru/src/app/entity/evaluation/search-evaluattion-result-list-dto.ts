import { SearchEvaluationResultDto } from './search-evaluation-result-dto';

export class SearchEvaluattionResultListDto {
  pageIndex: number;
  resultsLength: number;
  searchEvaluationResultDtos: SearchEvaluationResultDto[];
}
