import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { YesNoDialogData } from 'src/app/entity/dialog/yes-no-dialog-data';

@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.css']
})
export class YesNoDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: YesNoDialogData) { }

  ngOnInit() { }

}

