import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { EvaluateResultSumaryList } from '../../../entity/dto/evaluateResultSumaryList';
import { EvaluationResultService } from '../../../service/evaluationResult/evaluation-result.service';

@Component({
  selector: 'app-evaluation-result',
  templateUrl: './evaluation-result.component.html',
  styleUrls: ['./evaluation-result.component.css'],
  providers: [EvaluationResultService]
})
export class EvaluationResultComponent implements OnInit {

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
  public locale: String = 'ja-JP';
  public displayNameMonthFrom: String = 'evaluationResultScreen.monthFrom';

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
    private evaluationResultService: EvaluationResultService) {
  }

  ngOnInit() {
  }

  onReceiveEventFromChild(eventData: String) {
    this.monthFrom.setValue(eventData);
  }

}
