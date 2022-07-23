import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
    ProductoViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
