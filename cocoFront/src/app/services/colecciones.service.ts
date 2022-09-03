import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Coleccion } from '../interfaces/coleccion.interface';
import { FullCollection } from '../interfaces/coleccionComplete.interface';

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

  getAll(): Promise<Coleccion[] | any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('user-token')!
      })
    }
    return lastValueFrom(this.httpClient.get<Coleccion[]>(this.baseUrl, httpOptions))

  }

  getByCodigo(codigo: string): Promise<Coleccion[] | any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('user-token')!
      })
    }
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + '/codigo/' + codigo, httpOptions))
  }

  getLastCollections(): Promise<FullCollection[] | any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('user-token')!
      })
    }
    return lastValueFrom(this.httpClient.get<FullCollection[]>(this.baseUrl + '/ultimasColecciones', httpOptions))

  }

  createNewCollection(pFormValue: any): Promise<Coleccion | any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('user-token')!
      })
    };
    return lastValueFrom(this.httpClient.post<Coleccion>(this.baseUrl + '/nuevo', pFormValue, httpOptions))
  }

  /*  getCollectionByUserId(id: number): Promise<any> {
     const httpOptions = {
       headers: new HttpHeaders({
         authorization: localStorage.getItem('user-token')!
       })
     };
 
     return lastValueFrom(this.httpClient.get<any>())
 
   } */



}
