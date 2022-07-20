import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private baseURL: string = 'http://localhost:3000/api/productos'
  constructor(
    private httpClient: HttpClient
  ) { }

}
