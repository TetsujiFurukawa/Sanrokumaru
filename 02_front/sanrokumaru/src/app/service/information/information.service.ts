import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Information } from 'src/app/entity/domain/information';
import { INFORMATIONS } from 'src/app/mock/mock-information';
import { environment } from '../../../environments/environment';
import { AppConst } from '../../app-const';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  private server = environment.production ? AppConst.URL_PROD_SERVER : AppConst.URL_DEV_SERVER;
  private webApiUrl = 'informations';

  private headers: any = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getInformations(): Observable<Information[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log(this.server + this.webApiUrl);
    return this.http.get<Information[]>(this.server + this.webApiUrl, httpOptions);
  }

}
