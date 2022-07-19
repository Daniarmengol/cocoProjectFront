import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  registerUser(pFormValue: any): Promise<User | any> {
    return lastValueFrom(this.httpClient.post<User | any>(this.baseUrl + 'registro', pFormValue))
  }

  login(pFormValue: any): Promise<User | any> {
    return lastValueFrom(this.httpClient.post<User | any>(this.baseUrl + 'login', pFormValue))
  }


}
