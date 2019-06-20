import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY'
  },
  display: {
    dateInput: 'YYYY'
  },
};

@Component({
  selector: 'app-mat-datepicker-year',
  templateUrl: './mat-datepicker-year.component.html',
  styleUrls: ['./mat-datepicker-year.component.css'],
  providers: [{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})
export class MatDatepickerYearComponent implements OnInit {

  @Input() locale: String;
  @Input() placeholder: string;
  @Output() event = new EventEmitter<String>();

  year = new FormControl(moment());

  mainForm = this.formBuilder.group({
    year: this.year,
  });

  constructor(
    private formBuilder: FormBuilder,
    private adapter: DateAdapter<any>
  ) { }

  ngOnInit() {
    this.adapter.setLocale(this.locale);
    this.event.emit(this.year.value);
  }
  public reset() {
    this.year.setValue(moment());
  }

  private chosenYearHandler(normalizedYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.year.value;
    ctrlValue.year(normalizedYear.year());
    this.year.setValue(ctrlValue);
    this.event.emit(this.year.value);
    datepicker.close();
  }

  private addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.event.emit(this.year.value);
  }


}
