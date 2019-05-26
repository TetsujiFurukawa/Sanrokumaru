import { SearchEvaluationResultHeaderDto } from './search-evaluation-result-header-dto';
import { SearchEvaluationResultDto } from './search-evaluation-result-dto';

export class SearchEvaluattionResultListDto {
  totalNoOfRow: number;
  searchEvaluationResultHeaderDto: SearchEvaluationResultHeaderDto;
  searchEvaluationResultDtos: SearchEvaluationResultDto[];
}
