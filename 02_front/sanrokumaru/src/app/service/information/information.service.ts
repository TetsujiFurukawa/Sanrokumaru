import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Information } from 'src/app/entity/domain/information';
import { environment } from '../../../environments/environment';
import { AppConst } from '../../app-const';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  private server = environment.production ? AppConst.URL_PROD_SERVER : AppConst.URL_DEV_SERVER;
  private webApiUrl = 'informations';

  constructor(private http: HttpClient) { }

  getInformations(): Observable<Information[]> {

    console.log(this.server + this.webApiUrl);

    return this.http.get<Information[]>(this.server + this.webApiUrl, AppConst.httpOptions);

  }

}
