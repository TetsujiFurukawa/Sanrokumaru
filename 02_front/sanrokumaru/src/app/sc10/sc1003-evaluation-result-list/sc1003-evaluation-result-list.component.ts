import { Component, OnInit } from '@angular/core';
import 'bootstrap-datepicker';
import { EvaluateResultSumaryList } from '../../entity/evaluateResultSumaryList';

// import * as $ from 'jquery';

import { HeaderService } from '../../service/common/header/header.service';

@Component({
  selector: 'app-sc1003-evaluation-result-list',
  templateUrl: './sc1003-evaluation-result-list.component.html',
  styleUrls: ['./sc1003-evaluation-result-list.component.css']
})
export class Sc1003EvaluationResultListComponent implements OnInit {

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


  constructor() {
  }

  ngOnInit() {
    this.setUpDatePicker();
    this.setUpEvaluateResultSumaryLisｐ();
  }


  private setUpDatePicker() {
    $('#datepicker .date').datepicker({
      locale: 'ja',
      format: 'yyyy-mm-dd'
    });
  }

  // Informationsの初期化
  private setUpEvaluateResultSumaryLisｐ() {
    this.evaluateResultSumaryList = [
      {
        employeeCode: '12345',
        employeeName: 'テスト　太郎',
        employeeDepartment: 'XX営業部',
        Rank: '10',
        mailaddress: 'aaa@yahoo.co.jp',
        totalScore: 720,
        Score01: 60,
        Score02: 60,
        Score03: 60,
        Score04: 60,
        Score05: 60,
        Score06: 60,
        Score07: 60,
        Score08: 60,
        Score09: 60,
        Score10: 60,
        Score11: 60,
        Score12: 60
      },
      {
        employeeCode: '12345',
        employeeName: 'テスト　次郎',
        employeeDepartment: 'XX営業部',
        Rank: '10',
        mailaddress: 'aaa@yahoo.co.jp',
        totalScore: 720,
        Score01: 60,
        Score02: 60,
        Score03: 60,
        Score04: 60,
        Score05: 60,
        Score06: 60,
        Score07: 60,
        Score08: 60,
        Score09: 60,
        Score10: 60,
        Score11: 60,
        Score12: 60
      }
    ];



  }
}
