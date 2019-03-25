import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {
  errorMessages: string[] = [];

  constructor() { }

  public add(errorMessage: string) {
    this.errorMessages.push(errorMessage);
  }

  clear() {
    this.errorMessages = [];
  }

}
