import { Component, OnInit } from '@angular/core';
import { EvaluateResultSumaryList } from '../../../entity/dto/evaluateResultSumaryList';
import { EvaluationResultService } from '../../../service/evaluationResult/evaluation-result.service';

// import 'bootstrap-datepicker';
// import * as $ from 'jquery';

import { HeaderService } from '../../../service/common/header/header.service';

@Component({
  selector: 'app-evaluation-result',
  templateUrl: './evaluation-result.component.html',
  styleUrls: ['./evaluation-result.component.css'],
  providers: [EvaluationResultService]
})
export class EvaluationResultComponent implements OnInit {

  // 検索条件
  searchEvaluationMonthFrom: string;
  employeeCode: string;
  employeeRank: string;
  employeeDepartment1: string;
  employeeDepartment2: string;
  employeeDepartment3: string;
  employeeLastName: string;
  employeeFirstName: string;

  // 評価対象ラジオボタン
  selectedEvaluattionTarget = '0';
  evaluattionTargetOption = [
    { label: '指定なし', value: '0' },
    { label: '評価対象者のみ表示', value: '1' },
    { label: '未評価の評価対象者のみ表示(評価残)', value: '2' }
  ];

  // 退職者チェックボックス
  selectedRetiree;
  retireeOption = [
    { label: '退職者を含む', value: '9', selected: false }
  ];

  // 検索結果一覧表示用のエンティティ
  evaluateResultSumaryList: EvaluateResultSumaryList[];

  constructor(private evaluationResultService: EvaluationResultService) {
  }

  ngOnInit() {
    this.setUpDatePicker();
    this.evaluateResultSumaryList = this.evaluationResultService.getEvaluationResultListSummary();
  }


  private setUpDatePicker() {
    // this.searchEvaluationMonthFrom = '2018-11';
    // $('#datepicker .date').datepicker({
    //   format: 'yyyy-mm',
    //   language: 'ja',
    //   autoclose: true,
    //   minViewMode: 'months'
    // });
  }
}
