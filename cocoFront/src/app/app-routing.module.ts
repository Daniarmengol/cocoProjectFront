import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C404Component } from './components/c404/c404.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LoginGuard } from './guards/login.guard';
import { ColeccionesComponent } from './components/colecciones/colecciones.component';
import { ColeccionViewComponent } from './components/coleccion-view/coleccion-view.component';
import { UserColeccionViewComponent } from './components/user-coleccion-view/user-coleccion-view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'registro', component: RegistroUsuarioComponent },
  { path: 'productos', component: ProductosComponent, canActivate: [LoginGuard] },
  { path: 'colecciones', component: ColeccionesComponent },
  { path: 'colecciones/:idusuario', component: ColeccionViewComponent },
  { path: 'colecciones/:idusuario/idcolecciones', component: UserColeccionViewComponent },
  { path: '**', component: C404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
