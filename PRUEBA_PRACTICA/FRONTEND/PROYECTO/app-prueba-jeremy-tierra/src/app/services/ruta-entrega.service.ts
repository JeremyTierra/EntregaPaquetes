import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RutaEntregaEntity } from '../models/RutaEntregaEntity';


@Injectable({
  providedIn: 'root'
})
export class RutaEntregaService {

  private baseUrl = 'http://localhost:8080/api/rutas-entrega'; 

  constructor(private http: HttpClient) { }

  saveRutaEntrega(rutaEntrega: RutaEntregaEntity): Observable<RutaEntregaEntity> {
    return this.http.post<RutaEntregaEntity>(this.baseUrl, rutaEntrega)
      .pipe(
        catchError(this.handleError)
      );
  }

  getRutaEntregaById(id: number): Observable<RutaEntregaEntity> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<RutaEntregaEntity>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllRutasEntrega(): Observable<RutaEntregaEntity[]> {
    return this.http.get<RutaEntregaEntity[]>(this.baseUrl + '/all')
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteRutaEntregaById(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateRutaEntrega(id: number, updatedRutaEntrega: RutaEntregaEntity): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<void>(url, updatedRutaEntrega)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('Error en el servicio de rutas de entrega:', error);
    return throwError(error);
  }
}
