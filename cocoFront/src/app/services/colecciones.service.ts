import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColeccionesService {

  private baseUrl: string = 'http://localhost:3000/api/colecciones';
  private httpOptions = {
    headers: new HttpHeaders({
      authorization: localStorage.getItem('user-token')!
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }
}
