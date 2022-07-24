import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsersService } from './users.service';

// interface Location {

// }

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(
    private httpClient: HttpClient,
    private usersService: UsersService
  ) { }

  async getLocationByUserAddress(userId: number) {
    const user = await this.usersService.getById(userId);
    return this.httpClient.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?address=${user?.direccion}&key=${environment.googleMaps.apiKey}`)
  }

}
