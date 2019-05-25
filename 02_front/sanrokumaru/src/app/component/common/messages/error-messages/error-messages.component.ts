import { Component, OnInit } from '@angular/core';
import { ErrorMessageService } from 'src/app/service/message/error-message.service';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.css']
})
export class ErrorMessagesComponent implements OnInit {

  constructor(public errorMessageService: ErrorMessageService) { }

  ngOnInit() {
    this.errorMessageService.clear();
  }

}
