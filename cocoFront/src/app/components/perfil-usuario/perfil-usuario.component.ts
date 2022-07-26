import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Observable } from 'rxjs';
import { Localizacion } from 'src/app/interfaces/localizacion.interface';
import { User } from 'src/app/interfaces/user.interface';
import { MapsService } from 'src/app/services/maps.service';
import { UsersService } from 'src/app/services/users.service';
import * as dayjs from 'dayjs';


@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  @ViewChild("placesRef") placesRef: GooglePlaceDirective | any;
  options: any = {
    types: [],
    componentRestrictions: { country: 'ES' }
  }


  user: Observable<User[]> | any;
  profileTab: string = 'informacion';
  userEdad: any;
  userAntiguedad: any;

  // MAPA
  lat: number = 40;
  lng: number = -3;
  zoom: number = 10;
  // mapTypeId: string = 'hybrid';
  userLocation: Localizacion | any;


  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private mapsService: MapsService
  ) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {
      this.user = await this.usersService.getById(params.userId);
      // this.userAgeCalc(this.user.fecha_nacimiento)
      this.userEdad = dayjs().diff(dayjs(this.user.fecha_nacimiento), 'years');
      this.userAntiguedad = dayjs().diff(dayjs(this.user.fecha_registro), 'days')
      this.userLocation = await this.mapsService.getLocationByUserAddress(params.userId)

      if (this.userLocation.results) {
        // console.log(this.userLocation.results[0].geometry.location.lat);
        // console.log(this.userLocation.results[0].geometry.location.lng);
        this.lat = this.userLocation.results[0].geometry.location.lat;
        this.lng = this.userLocation.results[0].geometry.location.lng;
        this.zoom = 16;
      };

    });



  };

  cargarArticle(article: string): void {
    this.profileTab = article;
  }

  // userAgeCalc(userAge: string): number {
  //   return (dayjs().diff(dayjs(userAge), 'years'));
  // }

}