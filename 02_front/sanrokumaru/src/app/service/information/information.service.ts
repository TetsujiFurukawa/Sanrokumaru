import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Information } from 'src/app/entity/domain/information';
import { INFORMATIONS } from 'src/app/mock/mock-information';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor() { }

  getInformations(): Information[] {
    return INFORMATIONS;
  }
}
