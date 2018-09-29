import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../service/common/header/header.service';

@Component({
  selector: 'app-sc1003-evaluation-result-list',
  templateUrl: './sc1003-evaluation-result-list.component.html',
  styleUrls: ['./sc1003-evaluation-result-list.component.css']
})
export class Sc1003EvaluationResultListComponent implements OnInit {

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

  constructor() {
  }

  ngOnInit() { }

}
