import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reply, WebApiResponse, WebApiResponseV2 } from '../../../../../shared/models/response.interface';
import { E_ActualizarTareaData, E_InsertarTareaData, E_ListarTareas } from '../models/tarea.interface';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private _url: string = "";

  constructor(
    private _http: HttpClient,
    @Inject('BASE_URL_TODO_LIST') baseUrl: string
  ) {
    this._url = baseUrl + 'TodoList/'
  }

  getListarTareas(nIdUsuario: number): Observable<WebApiResponse<E_ListarTareas>> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const params = new HttpParams()
      .set('nIdUsuario', nIdUsuario);
    const url = `${this._url}getListarTareas` ;

    return this._http.get<WebApiResponse<E_ListarTareas>>(url, { headers, params});
  }

  getObtenerTareaId(nIdTarea: number): Observable<WebApiResponseV2<E_ListarTareas>> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const params = new HttpParams()
      .set('nIdTarea', nIdTarea);
    const url = `${this._url}getObtenerTareaId`;

    return this._http.get<WebApiResponseV2<E_ListarTareas>>(url, { headers, params })
  }

  postInsertarTarea(data: E_InsertarTareaData): Observable<WebApiResponseV2<Reply>> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `${this._url}postInsertarTarea`;

    return this._http.post<WebApiResponseV2<Reply>>(url, data, { headers })
  }

  putActualizarTarea(data: E_ActualizarTareaData): Observable<WebApiResponseV2<Reply>> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `${this._url}putActualizarTarea`;

    return this._http.put<WebApiResponseV2<Reply>>(url, data, { headers })
  }

  deleteEliminarTarea(nIdTarea: number): Observable<WebApiResponseV2<Reply>> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const params = new HttpParams()
      .set('nIdTarea', nIdTarea);
    const url = `${this._url}deleteEliminarTarea`;

    return this._http.delete<WebApiResponseV2<Reply>>(url, { headers, params })
  }
}
