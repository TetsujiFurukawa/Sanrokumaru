import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {
  errorMessages: string[] = [];

  constructor() { }

  add(errorMessage: string) {
    this.errorMessages.push(errorMessage);
  }

  clear() {
    this.errorMessages = [];
  }

}
