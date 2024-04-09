import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PaqueteEntity } from '../models/PaqueteEntity';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  private baseUrl = 'http://localhost:8080/api/paquetes'; 

  constructor(private http: HttpClient) { }

  savePaquete(paquete: PaqueteEntity): Observable<PaqueteEntity> {
    return this.http.post<PaqueteEntity>(this.baseUrl, paquete)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPaqueteById(id: number): Observable<PaqueteEntity> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<PaqueteEntity>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllPaquetes(): Observable<PaqueteEntity[]> {
    return this.http.get<PaqueteEntity[]>(this.baseUrl + '/all')
      .pipe(
        catchError(this.handleError)
      );
  }

  deletePaqueteById(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  updatePaquete(id: number|any, updatedPaquete: PaqueteEntity): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<void>(url, updatedPaquete)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('Error en el servicio de paquetes:', error);
    return throwError(error);
  }
}
