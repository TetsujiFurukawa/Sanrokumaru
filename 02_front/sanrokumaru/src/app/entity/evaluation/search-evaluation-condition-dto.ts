import { BaseSearchDto } from '../base-search-dto';

export class SearchEvaluationConditionDto extends BaseSearchDto {

  yearFrom: string;
  employeeCode: string;
  employeeRank: string;
  employeeDepartment1: string;
  employeeDepartment2: string;
  employeeDepartment3: string;
  employeeLastName: string;
  employeeFirstName: string;
  evaluationTarget: string;
  retiree: string;

}
