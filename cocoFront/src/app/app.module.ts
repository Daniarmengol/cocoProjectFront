import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { C404Component } from './components/c404/c404.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ColeccionesComponent } from './components/colecciones/colecciones.component';
import { ProductoViewComponent } from './components/producto-view/producto-view.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';

import { environment } from 'src/environments/environment';

import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';
import { MisProductosComponent } from './components/mis-productos/mis-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    RegistroUsuarioComponent,
    C404Component,
    HeaderComponent,
    ProductosComponent,
    ColeccionesComponent,
    ProductoViewComponent,
    PerfilUsuarioComponent,
    NuevoProductoComponent,
    MisProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot(environment.googleMaps),
    GooglePlaceModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
