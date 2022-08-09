import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Observable } from 'rxjs';
import { Localizacion } from 'src/app/interfaces/localizacion.interface';
import { User } from 'src/app/interfaces/user.interface';
import { MapsService } from 'src/app/services/maps.service';
import { ProductosService } from 'src/app/services/productos.service';
import { UsersService } from 'src/app/services/users.service';
import * as dayjs from 'dayjs';
import { Producto } from 'src/app/interfaces/producto.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';


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
  misProductos: Producto[] | any = [];
  checkUser: User | any;
  botonesOn: boolean = false;

  // USER
  user: Observable<User[]> | any;
  profileTab: string = 'informacion';
  userEdad: any;
  userAntiguedad: any;
  // userBioForm: FormGroup | any;

  // MAPA
  lat: number = 40;
  lng: number = -3;
  zoom: number = 10;
  // mapTypeId: string = 'hybrid';
  userLocation: Localizacion | any;


  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private mapsService: MapsService,
    private productosService: ProductosService
  ) {
    // this.userBioForm = new FormGroup({
    //   nombre: new FormControl([
    //     Validators.required
    //   ]),
    //   apellidos: new FormControl([
    //     Validators.required
    //   ]),
    //   discord: new FormControl([]),
    //   avatar: new FormControl([]),
    // })
  }


  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe((params) => {
    //   // console.log(params);
    //   this.profileTab = params['profileTab']
    // })

    this.activatedRoute.params.subscribe(async (params: any) => {
      this.user = await this.usersService.getById(params.userId);
      // this.userAgeCalc(this.user.fecha_nacimiento)
      this.userEdad = dayjs().diff(dayjs(this.user.fecha_nacimiento), 'years');
      this.userAntiguedad = dayjs().diff(dayjs(this.user.fecha_registro), 'days')
      this.userLocation = await this.mapsService.getLocationByUserAddress(params.userId)
      /* MIS PRODUCTOS */
      this.checkUser = await this.usersService.getUserByToken();
      (this.user.id === this.checkUser.id) ? this.botonesOn = true : this.botonesOn = false;
      this.misProductos = await this.usersService.getProductosByUser(params.userId)
      console.log(this.misProductos)
      if (this.userLocation.results) {
        // console.log(this.userLocation.results[0].geometry.location.lat);
        // console.log(this.userLocation.results[0].geometry.location.lng);
        this.lat = this.userLocation.results[0].geometry.location.lat;
        this.lng = this.userLocation.results[0].geometry.location.lng;
        this.zoom = 16;
      };

      // this.userBioForm.patchValue({
      //   nombre: this.user.nombre,
      //   apellidos: this.user.apellidos,
      //   discord: this.user.discord,
      //   avatar: this.user.avatar
      // })
    });



  };


  cargarArticle(article: string): void {
    this.profileTab = article;
  }

  async eliminarProd(id: number) {
    await this.productosService.eliminarProd(id)
    this.misProductos = await this.usersService.getProductosByUser(this.user.id)
  }

  // async getDataForm(userBioForm: any) {
  //   const myUser = await this.usersService.getUserByToken()
  //   try {
  //     console.log(myUser);
  //     const response: any = await this.usersService.editInfo(myUser.id, userBioForm)
  //     console.log(response);
  //   } catch (err) {
  //     console.log(err);

  //   }
  // }

}