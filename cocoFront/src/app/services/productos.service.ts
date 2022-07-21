import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { last, lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private baseUrl: string = 'http://localhost:3000/api/productos'
  private httpOptions = {
    headers: new HttpHeaders({
      authorization: localStorage.getItem('user-token')!
    })
  }
  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Promise<Producto[] | any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('user-token')!
      })
    }
    return lastValueFrom(this.httpClient.get<Producto[]>(this.baseUrl, httpOptions))
  }

  getUserByProducto(): Promise<Producto[] | any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('user-token')!
      })
    }
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + '/productos_venta', httpOptions))
  }

  busquedaAvanzada(formValue: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('user-token')!
      })
    }
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + '/busqueda/' + formValue.nombre + '/' + formValue.categoria + '/' + formValue.precio.precioMax + '/' + formValue.precio.precioMin + '/' + formValue.marca + '/' + formValue.estado, httpOptions))
  }

}
