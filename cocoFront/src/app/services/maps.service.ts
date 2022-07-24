import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Localizacion } from '../interfaces/localizacion.interface';
import { UsersService } from './users.service';


@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(
    private httpClient: HttpClient,
    private usersService: UsersService
  ) { }

  // Ideas: https://techclub.tajamar.es/ip-api-para-la-geolocalizacion-con-google-maps-angular/
  async getLocationByUserAddress(userId: number): Promise<Localizacion> {
    const user = await this.usersService.getById(userId);
    // console.log(user?.direccion);
    const baba = lastValueFrom(this.httpClient.get<Localizacion>(`https://maps.googleapis.com/maps/api/geocode/json?address=${user?.direccion}&key=${environment.googleMaps.apiKey}`));
    // console.log(baba);

    return baba
  }

}
