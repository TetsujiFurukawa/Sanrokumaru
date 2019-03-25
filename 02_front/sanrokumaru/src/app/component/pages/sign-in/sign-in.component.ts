import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Information } from '../../../entity/domain/information';
import { InformationService } from '../../../service/information/information.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  // お知らせ
  informations: Information[];

  constructor(
    private formBuilder: FormBuilder,
    private infomationService: InformationService
  ) { }


  ngOnInit() {
    this.setUpFormGroup();
    // 最新インフォメーションを取得取得する
    this.getInformations();
  }

  private setUpFormGroup(): void {
    // 入力項目
    this.signInForm = this.formBuilder.group({
      signInUserId: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      signInPassword: ['', Validators.required]
    });
  }

  /**
   * 最新インフォメーションを取得します
   */
  private getInformations(): void {
    this.infomationService.getInformations().subscribe(Informations => this.informations = Informations);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
  }

  get f() {
    return this.signInForm.controls;
  }

  public get signInUserId() {
    return this.signInForm.get('signInUserId');
  }

  public get signInPassword() {
    return this.signInForm.get('signInPassword');
  }

}
