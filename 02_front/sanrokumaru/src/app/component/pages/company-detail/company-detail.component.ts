import { merge, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { AppConst } from 'src/app/app-const';
import { CompanyDto } from 'src/app/entity/company/company-dto';
import { YesNoDialogData } from 'src/app/entity/dialog/yes-no-dialog-data';
import { CompanyService } from 'src/app/service/company/company.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { YesNoDialogComponent } from '../../common/dialog/yes-no-dialog/yes-no-dialog.component';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})

export class CompanyDetailComponent implements OnInit {
  public companySeq: bigint;
  public companyName = new FormControl('', [Validators.required]);
  public companyKana = new FormControl('', [Validators.required]);
  public companyPostalCode = new FormControl('', [Validators.required]);
  public companyAddress1 = new FormControl('', [Validators.required]);
  public companyAddress2 = new FormControl('', [Validators.required]);
  public companyAddress3 = new FormControl('', []);
  public companyPhoneNumber = new FormControl('', []);
  public personInChargeFirstName = new FormControl('', []);
  public personInChargeLastName = new FormControl('', []);
  public departmentInCharge1 = new FormControl('', []);
  public departmentInCharge2 = new FormControl('', []);
  public departmentInCharge3 = new FormControl('', []);
  public personInChargeEmailAddress = new FormControl('', [Validators.email]);
  public deleted = new FormControl('', []);
  public deletedDay = new FormControl('', []);

  public isLoadingResults = false;

  public mainForm = this.formBuilder.group({
    companyName: this.companyName,
    companyKana: this.companyKana,
    companyPostalCode: this.companyPostalCode,
    companyAddress1: this.companyAddress1,
    companyAddress2: this.companyAddress2,
    companyAddress3: this.companyAddress3,
    companyPhoneNumber: this.companyPhoneNumber,
    personInChargeFirstName: this.personInChargeFirstName,
    personInChargeLastName: this.personInChargeLastName,
    departmentInCharge1: this.departmentInCharge1,
    departmentInCharge2: this.departmentInCharge2,
    departmentInCharge3: this.departmentInCharge3,
    personInChargeEmailAddress: this.personInChargeEmailAddress,
    deleted: this.deleted,
    deletedDay: this.deletedDay
  });

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private readonly translateService: TranslateService,
    private dialog: MatDialog,
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.setUpBrowserTitle();
    const companySeq = +this.route.snapshot.paramMap.get('companySeq');
    this.getCompany(companySeq);
  }

  private setUpBrowserTitle() {
    this.title.setTitle(AppConst.APP_TITLE + AppConst.APP_SUB_TITLE_COMPANY_Detail);
  }

  getCompany(companySeq: number) {
    merge()
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.companyService.getCompany(companySeq);
        }),

        map(data => {
          this.isLoadingResults = false;
          return data;
        }),

        catchError(() => {
          this.isLoadingResults = false;
          return of(null as any);
        })

      ).subscribe(data => this.extractFromCompanyDto(data));

  }

  private onBack() {
    this.router.navigate(['/company-list']);
  }

  private onUpdate() {
    const dialogData: YesNoDialogData = {
      title: this.translateService.instant('companyDetailScreen.saveYesNoDialog.title'),
      message: this.translateService.instant('companyDetailScreen.saveYesNoDialog.message'),
      captionYes: this.translateService.instant('companyDetailScreen.saveYesNoDialog.captionYes'),
      captionNo: this.translateService.instant('companyDetailScreen.saveYesNoDialog.captionNo')
    };

    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      width: '250px',
      height: '200px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');
      if ('${result}') {
        this.update();
      }
    });
  }

  private update() {
    const companyDto: CompanyDto = this.createCompanyDto();

    merge()
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          if (companyDto.companySeq == null) {
            return this.companyService.createCompany(companyDto);
          } else {
            return this.companyService.updateCompany(companyDto);
          }
        }),

        map(data => {
          this.isLoadingResults = false;
          return data;
        }),

        catchError(() => {
          this.isLoadingResults = false;
          return of(null as any);
        })

      ).subscribe(data => this.extractFromCompanyDto(data));

  }

  private createCompanyDto(): CompanyDto {

    const companyDto: CompanyDto = new CompanyDto();
    companyDto.companySeq = this.companySeq;
    companyDto.companyName = this.companyName.value;
    companyDto.companyKana = this.companyKana.value;
    companyDto.companyPostalCode = this.companyPostalCode.value;
    companyDto.companyAddress1 = this.companyAddress1.value;
    companyDto.companyAddress2 = this.companyAddress2.value;
    companyDto.companyAddress3 = this.companyAddress3.value;
    companyDto.companyPhoneNumber = this.companyPhoneNumber.value;
    companyDto.personInChargeLastName = this.personInChargeLastName.value;
    companyDto.personInChargeFirstName = this.personInChargeFirstName.value;
    companyDto.departmentInCharge1 = this.departmentInCharge1.value;
    companyDto.departmentInCharge2 = this.departmentInCharge2.value;
    companyDto.departmentInCharge3 = this.departmentInCharge3.value;
    companyDto.personInChargeEmailAddress = this.personInChargeEmailAddress.value;
    companyDto.deleted = this.deleted.value;

    return companyDto;

  }

  private extractFromCompanyDto(companyDto: CompanyDto) {

    this.companySeq = companyDto.companySeq;
    this.companyName.setValue(companyDto.companyName);
    this.companyKana.setValue(companyDto.companyKana);
    this.companyPostalCode.setValue(companyDto.companyPostalCode);
    this.companyAddress1.setValue(companyDto.companyAddress1);
    this.companyAddress2.setValue(companyDto.companyAddress2);
    this.companyAddress3.setValue(companyDto.companyAddress3);
    this.companyPhoneNumber.setValue(companyDto.companyPhoneNumber);
    this.personInChargeLastName.setValue(companyDto.personInChargeLastName);
    this.personInChargeFirstName.setValue(companyDto.personInChargeFirstName);
    this.departmentInCharge1.setValue(companyDto.departmentInCharge1);
    this.departmentInCharge2.setValue(companyDto.departmentInCharge2);
    this.departmentInCharge3.setValue(companyDto.departmentInCharge3);
    this.personInChargeEmailAddress.setValue(companyDto.personInChargeEmailAddress);
    this.deleted.setValue(companyDto.deleted);

  }

}
