import { Component, OnInit } from '@angular/core';
import { EvaluateResultSumaryList } from '../../../entity/dto/evaluateResultSumaryList';
import { Sc1003EvaluationResultService } from '../../../service/sc10/sc1003-evaluation-result.service';

import 'bootstrap-datepicker';
import * as $ from 'jquery';

import { HeaderService } from '../../../service/common/header/header.service';

@Component({
  selector: 'app-sc1003-evaluation-result',
  templateUrl: './sc1003-evaluation-result.component.html',
  styleUrls: ['./sc1003-evaluation-result.component.css'],
  providers: [Sc1003EvaluationResultService]
})
export class Sc1003EvaluationResultComponent implements OnInit {

  searchEvaluationMonthFrom: string;
  searchEvaluationMonthTo: string;

  // 評価対象者
  selectedEvaluattionTarget = '0';
  evaluattionTargetData = [
    { label: '指定なし', value: '0' },
    { label: '評価対象者のみ表示', value: '1' },
    { label: '未評価の評価対象者のみ表示(評価残)', value: '2' }
  ];

  // 退職者
  selectedRetiree;
  retireeData = [
    { label: '退職者を含む', value: '9', selected: false }
  ];

  // 一覧表示用のエンティティ
  evaluateResultSumaryList: EvaluateResultSumaryList[];


  constructor(private sc1003EvaluationResultService: Sc1003EvaluationResultService) {
  }

  ngOnInit() {
    this.setUpDatePicker();
    this.evaluateResultSumaryList = this.sc1003EvaluationResultService.getEvaluationResultListSummary();
  }


  private setUpDatePicker() {
    $('#datepicker .date').datepicker({
      locale: 'ja',
      format: 'yyyy-mm-dd'
    });
  }
}
