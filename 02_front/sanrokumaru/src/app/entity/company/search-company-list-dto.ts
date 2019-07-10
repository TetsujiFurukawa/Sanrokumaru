import { BaseSearchResultDto } from '../base-search-result-dto';
import { SearchCompanyDto } from './search-company-dto';

export class SearchCompanyListDto extends BaseSearchResultDto {

  searchCompanyDtos: SearchCompanyDto[];

}
