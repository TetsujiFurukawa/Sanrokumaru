import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment, Moment } from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM',
  },
  display: {
    dateInput: 'YYYY/MM',
    monthYearLabel: 'YYYY MMM',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY MMMM',
  },
};

@Component({
  selector: 'app-mat-datepicker-month',
  templateUrl: './mat-datepicker-month.component.html',
  styleUrls: ['./mat-datepicker-month.component.css'],
  providers: [{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})
export class MatDatepickerMonthComponent implements OnInit {

  @Input() locale: String;
  @Input() placeholder: string;
  @Output() event = new EventEmitter<String>();

  yearMonth = new FormControl(moment());

  mainForm = this.formBuilder.group({
    yearMonth: this.yearMonth,
  });

  constructor(
    private formBuilder: FormBuilder,
    private adapter: DateAdapter<any>
  ) { }

  ngOnInit() {
    this.adapter.setLocale(this.locale);
    this.event.emit(this.yearMonth.value);
  }

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.yearMonth.value;
    ctrlValue.year(normalizedYear.year());
    this.yearMonth.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.yearMonth.value;
    ctrlValue.month(normalizedMonth.month());
    this.yearMonth.setValue(ctrlValue);
    this.event.emit(this.yearMonth.value);
    datepicker.close();
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.event.emit(this.yearMonth.value);
  }
}
