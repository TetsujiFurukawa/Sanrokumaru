import { Component, OnInit } from '@angular/core';
import { EvaluateResultSumaryList } from '../../../entity/dto/evaluateResultSumaryList';
import { If1003EvaluationResultService } from '../../../service/if10/if1003-evaluation-result.service';

import 'bootstrap-datepicker';
import * as $ from 'jquery';

import { HeaderService } from '../../../service/common/header/header.service';

@Component({
  selector: 'app-if1003-evaluation-result',
  templateUrl: './if1003-evaluation-result.component.html',
  styleUrls: ['./if1003-evaluation-result.component.css'],
  providers: [If1003EvaluationResultService]
})
export class If1003EvaluationResultComponent implements OnInit {

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

  constructor(private if1003EvaluationResultService: If1003EvaluationResultService) {
  }

  ngOnInit() {
    this.setUpDatePicker();
    this.evaluateResultSumaryList = this.if1003EvaluationResultService.getEvaluationResultListSummary();
  }


  private setUpDatePicker() {
    this.searchEvaluationMonthFrom = '2018-11';
    $('#datepicker .date').datepicker({
      format: 'yyyy-mm',
      language: 'ja',
      autoclose: true,
      minViewMode: 'months'
    });
  }
}
