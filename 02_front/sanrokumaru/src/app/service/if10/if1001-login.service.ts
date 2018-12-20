import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Information } from '../../entity/domain/information';
import { environment } from '../../../environments/environment';

import { AppConst } from '../../app-const';

@Injectable({
  providedIn: 'root'
})
export class If1001LoginService {
  // お知らせ
  informations: Information[];

  // コンストラクタ
  constructor(private http: HttpClient) { }

  /**
   * お知らせを取得する
   */
  getInformations(): void {

    // サーバ URL
    const serverUrl = environment.production ? AppConst.URL_PROD_SERVER : AppConst.URL_STG_SERVER;
    const path = AppConst + 'if1001';

    // サーバ URL とパスを結合して URL を生成し GET 通信する
    this.http.get<Information[]>(serverUrl + path)
      .toPromise()
      .then((response) => {
        this.informations = response;
      })
      .catch((error) => {
        this.informations = null;
      });
  }
}
