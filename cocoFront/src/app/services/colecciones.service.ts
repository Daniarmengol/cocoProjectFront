import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColeccionesService {

  private baseUrl: string = 'http://localhost:3000/api/colecciones'

  constructor(
    private httpClient: HttpClient
  ) { }
}
