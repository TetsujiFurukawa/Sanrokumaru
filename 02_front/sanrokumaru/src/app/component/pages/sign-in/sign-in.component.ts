import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Information } from '../../../entity/domain/information';
import { InformationService } from '../../../service/information/information.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private infomationService: InformationService
  ) { }

  signInForm: FormGroup;



  // お知らせ
  informations: Information[];

  ngOnInit() {
    this.setUpFormGroup();
    // 最新インフォメーションを取得取得する
    this.getInformations();
  }

  private setUpFormGroup(): void {
    // 入力項目
    this.signInForm = this.formBuilder.group({
      signiInUserId: ['', Validators.required],
      signiInPassword: ['']
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

  // getter
  public get f() {
    return this.signInForm.controls;
  }

  public get signiInUserId() {
    return this.signInForm.get('signiInUserId');
  }

}
