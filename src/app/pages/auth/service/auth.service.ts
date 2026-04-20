import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reply, WebApiResponse, WebApiResponseV2 } from '../../../../shared/models/response.interface';
import { E_InsertarUsuario } from '../models/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _url: string = "";

  constructor(
    private _http: HttpClient,
    @Inject('BASE_URL_TODO_LIST') baseUrl: string
  ) {
    this._url = baseUrl + 'TodoList/'
  }

  getValidarLogeo(sCorreo: string, sPassword: string): Observable<WebApiResponseV2<Reply>> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const params = new HttpParams()
      .set('sCorreo', sCorreo)
      .set('sPassword', sPassword);
    const url = `${this._url}getValidarLogeo`;
    return this._http.get<WebApiResponseV2<Reply>>(url, { headers, params })
  }


  postRegistarUsuario(data: E_InsertarUsuario): Observable<WebApiResponseV2<Reply>> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `${this._url}postRegistarUsuario`;
    return this._http.post<WebApiResponseV2<Reply>>(url, data, { headers })
  }

}
