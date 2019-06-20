import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { EvaluationService } from 'src/app/service/evaluation/evaluation.service';
import { SearchEvaluationResultDto } from 'src/app/entity/evaluation/search-evaluation-result-dto';
import { MatPaginator } from '@angular/material';
import { merge, of } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { MatDatepickerYearComponent } from '../../common/date/mat-datepicker-year/mat-datepicker-year.component';
import { HttpParams } from '@angular/common/http';
import { HttpParamsOptions } from '@angular/common/http/src/params';

@Component({
  selector: 'app-evaluation-result',
  templateUrl: './evaluation-result.component.html',
  styleUrls: ['./evaluation-result.component.css'],
  providers: [EvaluationService]
})
export class EvaluationResultComponent implements OnInit {

  // These are the search condition settings.
  public yearFrom = new FormControl('', []);
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
    yearFrom: this.yearFrom,
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

  // These are the display name yearFrom settings.
  // public locale: String = AppConst.LANG;
  public displayNameYearFrom: String = 'evaluationResultScreen.yearFrom';

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

  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatDatepickerYearComponent) private matDatepickerYearComponent: MatDatepickerYearComponent;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private formBuilder: FormBuilder,
    private evaluationService: EvaluationService
  ) { }

  ngOnInit() {
  }

  onReceiveEventFromChild(eventData: String) {
    this.yearFrom.setValue(eventData);
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
          return this.evaluationService.getEvaluationResult(this.craeteHttpParams());
        }),

        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.resultsLength;
          this.paginator.pageIndex = data.pageIndex;
          return data.searchEvaluationResultDtos;
        }),

        catchError(() => {
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          return of(null as any);
        })

      ).subscribe(data => this.searchEvaluationResultDtos = data);
  }

  private craeteHttpParams(): HttpParams {
    const conditions = {

      yearFrom: formatDate(this.yearFrom.value, 'yyyy', this.locale),
      employeeCode: this.employeeCode.value,
      employeeRank: this.employeeRank.value,
      employeeDepartment1: this.employeeDepartment1.value,
      employeeDepartment2: this.employeeDepartment2.value,
      employeeDepartment3: this.employeeDepartment3.value,
      employeeLastName: this.employeeLastName.value,
      employeeFirstName: this.employeeFirstName.value,
      evaluationTarget: this.evaluationTarget.value,
      retiree: this.retiree.value,

      pageSize: this.paginator.pageSize.toString(),
      pageIndex: this.paginator.pageIndex.toString()

    };

    const paramsOptions = <HttpParamsOptions>{ fromObject: conditions };
    const params = new HttpParams(paramsOptions);

    return params;

  }

  clearSearchCondition() {

    this.matDatepickerYearComponent.reset();
    this.employeeCode.setValue('');
    this.employeeRank.setValue('');
    this.employeeDepartment1.setValue('');
    this.employeeDepartment2.setValue('');
    this.employeeDepartment3.setValue('');
    this.employeeLastName.setValue('');
    this.employeeFirstName.setValue('');
    this.evaluationTarget.setValue('0');
    this.retiree.setValue('');

  }

  private clearSearchResultList() {

    this.searchEvaluationResultDtos = null;
    this.resultsLength = 0;

  }

}
