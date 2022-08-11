import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { last, lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private baseUrl: string = 'http://localhost:3000/api/productos'
  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     authorization: localStorage.getItem('user-token')!
  //   })
  // }
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

  getProductosVenta(): Promise<Producto[] | any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('user-token')!
      })
    }
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + '/productos_venta', httpOptions))
  }

  getById(id: number): Promise<Producto | any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('user-token')!
      })
    }
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + '/producto/' + id, httpOptions))
  }

  busquedaAvanzada(formValue: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('user-token')!
      })
    }
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + '/productos_venta/busqueda', formValue, httpOptions))

  }

  addProducto(formValue: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('user-token')!
      })

    }
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + '/nuevo', formValue, httpOptions))
  }

  eliminarProd(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('user-token')!
      })

    }
    return lastValueFrom(this.httpClient.delete<any>(this.baseUrl + '/eliminar/' + id, httpOptions))
  }

  editarProducto(id: number, editFormValue: any): Promise<Producto | any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('user-token')!
      })
    }
    return lastValueFrom(this.httpClient.patch<any>(this.baseUrl + '/editar/' + id, editFormValue, httpOptions))
  }

}
