import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { EvaluateResultSumaryList } from '../../../entity/dto/evaluateResultSumaryList';
import { EvaluationResultService } from '../../../service/evaluationResult/evaluation-result.service';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment, Moment } from 'moment';

const moment = _rollupMoment || _moment;

import { HeaderService } from '../../../service/common/header/header.service';

// export const MY_FORMATS = {
//   parse: {
//     dateInput: 'YYYY/MM',
//   },
//   display: {
//     dateInput: 'YYYY/MM',
//     monthYearLabel: 'YYYY MMM',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'YYYY MMMM',
//   },
// };
@Component({
  selector: 'app-evaluation-result',
  templateUrl: './evaluation-result.component.html',
  styleUrls: ['./evaluation-result.component.css'],
  providers: [EvaluationResultService]
})
export class EvaluationResultComponent implements OnInit {

  public monthFrom = new FormControl(moment());
  public employeeCode = new FormControl('', []);
  public employeeRank = new FormControl('', []);
  public employeeDepartment1 = new FormControl('', []);
  public employeeDepartment2 = new FormControl('', []);
  public employeeDepartment3 = new FormControl('', []);
  public employeeLastName = new FormControl('', []);
  public employeeFirstName = new FormControl('', []);
  public evaluationTarget = new FormControl('0', []);
  public retiree = new FormControl('', []);
  public locale: String = 'ja-JP';
  public displayNameMonthFrom: String = 'evaluationResultScreen.monthFrom';

  public testMonth = new FormControl(moment());

  // サインインのフォーム設定
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

  // 検索条件
  searchEvaluationMonthFrom: string;

  // 評価対象ラジオボタン
  evaluationTargetOption = [
    { label: 'evaluationResultScreen.evaluationTargetOptions.noOption', value: '0' },
    { label: 'evaluationResultScreen.evaluationTargetOptions.targetPersonOnly', value: '1' },
    { label: 'evaluationResultScreen.evaluationTargetOptions.notevaluated', value: '2' }
  ];

  // 退職者チェックボックス
  // selectedRetiree;
  // retireeOption = [
  //   { label: '退職者を含む', value: '9', selected: false }
  // ];

  // 検索結果一覧表示用のエンティティ
  evaluateResultSumaryList: EvaluateResultSumaryList[];

  constructor(
    private formBuilder: FormBuilder,
    private evaluationResultService: EvaluationResultService,
    private adapter: DateAdapter<any>) {
  }

  ngOnInit() {
    this.adapter.setLocale('ja-JP');
  }

  onReceiveEventFromChild(eventData: String) {
    this.testMonth.setValue(eventData);
    this.monthFrom.setValue(eventData);
    console.log('monthFrom:' + (this.monthFrom.value).format('YYYYMM'));
  }

}
