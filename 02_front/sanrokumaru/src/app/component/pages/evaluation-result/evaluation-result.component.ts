import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { EvaluationService } from 'src/app/service/evaluation/evaluation.service';
import { SearchEvaluationResultDto } from 'src/app/entity/evaluation/search-evaluation-result-dto';
import { MatPaginator } from '@angular/material';
import { merge, of } from 'rxjs';
import { startWith, switchMap, map, catchError, finalize } from 'rxjs/operators';
import { SearchEvaluationConditionDto } from 'src/app/entity/evaluation/search-evaluation-condition-dto';
import { PagenatorDto } from 'src/app/entity/pagenator/pagenator-dto';
import { AppConst } from 'src/app/app-const';

@Component({
  selector: 'app-evaluation-result',
  templateUrl: './evaluation-result.component.html',
  styleUrls: ['./evaluation-result.component.css'],
  providers: [EvaluationService]
})
export class EvaluationResultComponent implements OnInit {

  // These are the search condition settings.
  public monthFrom = new FormControl('', []);
  public employeeCode = new FormControl('', []);
  public employeeRank = new FormControl('', []);
  public employeeDepartment1 = new FormControl('', []);
  public employeeDepartment2 = new FormControl('', []);
  public employeeDepartment3 = new FormControl('', []);
  public employeeLastName = new FormControl('', []);
  public employeeFirstName = new FormControl('', []);
  public evaluationTarget = new FormControl('0', []);
  public retiree = new FormControl('', []);

  public mainForm = this.formBuilder.group({
    monthFrom: this.monthFrom,
    employeeCode: this.employeeCode,
    employeeRank: this.employeeRank,
    employeeDepartment1: this.employeeDepartment1,
    employeeDepartment2: this.employeeDepartment2,
    employeeDepartment3: this.employeeDepartment3,
    employeeLastName: this.employeeLastName,
    employeeFirstName: this.employeeFirstName,
    evaluationTarget: this.evaluationTarget,
    retiree: this.retiree
  });

  // These are the display name monthFrom settings.
  public locale: String = AppConst.LANG;
  public displayNameMonthFrom: String = 'evaluationResultScreen.monthFrom';

  // These are the evaluation target option settings.
  evaluationTargetOption = [
    { label: 'evaluationResultScreen.evaluationTargetOptions.noOption', value: '0' },
    { label: 'evaluationResultScreen.evaluationTargetOptions.targetPersonOnly', value: '1' },
    { label: 'evaluationResultScreen.evaluationTargetOptions.notevaluated', value: '2' }
  ];

  public totalNoOfRow: number;
  public searchEvaluationResultDtos: SearchEvaluationResultDto[];
  public displayEvaluationResultColumns: string[] = [
    'employeeCode',
    'employeeName',
    'employeeDepartment',
    'employeeRank',
    'employeeEMailAddress',
    'evaluateYear',
    'evaluateTotalPoint',
    'evaluatePoint01', 'evaluatePoint02', 'evaluatePoint03', 'evaluatePoint04', 'evaluatePoint05', 'evaluatePoint06',
    'evaluatePoint07', 'evaluatePoint08', 'evaluatePoint09', 'evaluatePoint10', 'evaluatePoint11', 'evaluatePoint12'
  ];

  public resultsLength = 0;
  public isLoadingResults = false;
  public isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private formBuilder: FormBuilder,
    private evaluationService: EvaluationService
  ) { }

  ngOnInit() {
  }

  onReceiveEventFromChild(eventData: String) {
    this.monthFrom.setValue(eventData);
  }
  private onClear() {

    this.clearSearchCondition();
    this.clearSearchResultList();

  }

  private onSearch() {

    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.evaluationService.getEvaluationResult(this.setupSearchConditionDto());
        }),

        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.resultsLength;
          return data.searchEvaluationResultDtos;
        }),

        catchError(() => {
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          return of(null as any);
        })

      ).subscribe(data => this.searchEvaluationResultDtos = data);
  }

  private setupSearchConditionDto(): SearchEvaluationConditionDto {
    console.log(this.monthFrom.value);

    const pagenatorDto: PagenatorDto = new PagenatorDto();
    pagenatorDto.pageSize = this.paginator.pageSize;
    pagenatorDto.pageIndex = this.paginator.pageIndex;

    const searchEvaluationConditionDto: SearchEvaluationConditionDto = new SearchEvaluationConditionDto();
    searchEvaluationConditionDto.monthFrom = this.monthFrom.value;
    searchEvaluationConditionDto.employeeCode = this.employeeCode.value;
    searchEvaluationConditionDto.employeeRank = this.employeeRank.value;
    searchEvaluationConditionDto.employeeDepartment1 = this.employeeDepartment1.value;
    searchEvaluationConditionDto.employeeDepartment2 = this.employeeDepartment2.value;
    searchEvaluationConditionDto.employeeDepartment3 = this.employeeDepartment3.value;
    searchEvaluationConditionDto.employeeLastName = this.employeeLastName.value;
    searchEvaluationConditionDto.employeeFirstName = this.employeeFirstName.value;
    searchEvaluationConditionDto.evaluationTarget = this.evaluationTarget.value;
    searchEvaluationConditionDto.retiree = this.retiree.value;
    searchEvaluationConditionDto.pagenatorDto = pagenatorDto;

    return searchEvaluationConditionDto;

  }

  clearSearchCondition() {
    throw new Error('Method not implemented.');
  }

  private clearSearchResultList() {

    this.searchEvaluationResultDtos = null;
    this.resultsLength = 0;

  }

}
