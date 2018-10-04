import { Injectable } from '@angular/core';
import { EvaluateResultSumaryList } from '../../entity/dto/evaluateResultSumaryList';

@Injectable({
  providedIn: 'root'
})
export class Sc1003EvaluationResultListService {

  constructor() { }

  getEvaluationResultListSummary(): EvaluateResultSumaryList[] {
    return [
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
