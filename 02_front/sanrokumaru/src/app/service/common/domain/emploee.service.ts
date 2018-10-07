import { Injectable } from '@angular/core';
import { Employee } from '../../../entity/domain/employee';

@Injectable({
  providedIn: 'root'
})
export class EmploeeService {

  constructor() { }

  public getEmploee(): Employee {
    return null;
  }
}
