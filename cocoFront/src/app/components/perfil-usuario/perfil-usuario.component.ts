import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { ProductosService } from 'src/app/services/productos.service';
import { UsersService } from 'src/app/services/users.service';

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
  };
  /* MIS PRODUCTOS */
  misProductos: any[] = [];


  user: Observable<User[]> | any;
  profileTab: string = 'informacion';

  // MAPA
  lat: number = 40;
  lng: number = -3;
  zoom: number = 10;
  // mapTypeId: string = 'hybrid';
  userAddress: string = '';


  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {
      this.user = await this.usersService.getById(params.userId);
      /* MIS PRODUCTOS */
      this.misProductos = await this.usersService.getProductosByUser(params.userId)
      console.log(this.misProductos)
    });

    this.userAddress = this.user?.direccion;
    console.log(this.userAddress);


    // navigator.geolocation.getCurrentPosition(pos => {
    //   this.lat = pos.coords.latitude;
    //   this.lng = pos.coords.longitude;
    // })

    // this.setCurrentLocation();
  };

  cargarArticle(article: string): void {
    this.profileTab = article;
  }

  // public handleAddressChange(address: Address) {
  //   // console.log(address.geometry.location.lat());
  //   // console.log(address.geometry.location.lng());
  //   // address = this.user?.direccion
  //   console.log(address);

  //   this.lat = address.geometry.location.lat()
  //   this.lng = address.geometry.location.lng()
  //   this.zoom = 15;
  // }

  // public setCurrentLocation() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.lat = position.coords.latitude
  //       this.lng = position.coords.longitude
  //       this.zoom = 15;
  //     })
  //   }
  // }

}
