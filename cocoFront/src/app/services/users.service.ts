import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { User } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = 'http://localhost:3000/api/usuarios/'

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Promise<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('user-token')!
      })
    };
    return lastValueFrom(this.httpClient.get<User[] | any>(this.baseUrl, httpOptions))
  }

  getById(id: number): Promise<User | void> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('user-token')!
      })
    };
    return lastValueFrom(this.httpClient.get<User | any>(this.baseUrl + id, httpOptions))
  }

  getByTrust(trust: number): Promise<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('user-token')!
      })
    };
    return lastValueFrom(this.httpClient.get<User[]>(this.baseUrl + 'trust/' + trust, httpOptions));
  };

  getByStrictUsername(username: string): Promise<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('user-token')!
      })
    };
    console.log(username);

    return lastValueFrom(this.httpClient.get<User>(this.baseUrl + 'username/strict/' + username, httpOptions))
  }

  getByStrictEmail(email: string): Promise<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('user-token')!
      })
    };
    return lastValueFrom(this.httpClient.get<User>(this.baseUrl + 'email/strict/' + email, httpOptions))
  }

  getUserByToken(): Promise<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('user-token')!
      })
    };
    return lastValueFrom(this.httpClient.get<User>(this.baseUrl + 'token/check', httpOptions))
  }

  registerUser(pFormValue: any): Promise<User | any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return lastValueFrom(this.httpClient.post<User | any>(this.baseUrl + 'registro', pFormValue, httpOptions))
  }

  login(pFormValue: any): Promise<User | any> {
    return lastValueFrom(this.httpClient.post<User | any>(this.baseUrl + 'login', pFormValue))
  }

  getRandomTrusted(): Promise<User | any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('user-token')!
      })
    };
    return lastValueFrom(this.httpClient.get<User | any>(this.baseUrl + 'rand/trusted', httpOptions))
  }

  getProductosByUser(id: number): Promise<User | any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('user-token')!
      })
    };
    return lastValueFrom(this.httpClient.get<User | any>(this.baseUrl + 'mis-productos/' + id, httpOptions))

  }
}
