import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = 'http://localhost:3000/api/usuarios/'
  private httpOptions = {
    headers: new HttpHeaders({
      authorization: localStorage.getItem('user-token')!
    })
  };
  constructor(
    private httpClient: HttpClient
  ) { }

  getByTrust(trust: string): Promise<User[]> {
    return lastValueFrom(this.httpClient.get<User[]>(this.baseUrl + 'trust/' + trust, this.httpOptions));
  };

  registerUser(pFormValue: any): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + 'registro', pFormValue))
  }

  login(pFormValue: any): Promise<User | any> {
    return lastValueFrom(this.httpClient.post<User | any>(this.baseUrl + 'login', pFormValue))
  }


}
