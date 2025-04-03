// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<any> {
    return this.http.get(`${this.apiUrl}pacientes/`);
  }
  getMedicos(): Observable<any> {
    return this.http.get(`${this.apiUrl}medicos/`);
  }

  getFarmacia(): Observable<any> {
    return this.http.get(`${this.apiUrl}farmacia/`);
  }

}