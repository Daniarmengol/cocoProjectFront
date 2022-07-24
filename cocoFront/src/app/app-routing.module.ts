import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C404Component } from './components/c404/c404.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LoginGuard } from './guards/login.guard';
import { ColeccionesComponent } from './components/colecciones/colecciones.component';
import { ProductoViewComponent } from './components/producto-view/producto-view.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'registro', component: RegistroUsuarioComponent },
  { path: 'productos', component: ProductosComponent, canActivate: [LoginGuard] },
  { path: 'colecciones', component: ColeccionesComponent, canActivate: [LoginGuard] },
  { path: 'producto/:id', component: ProductoViewComponent, canActivate: [LoginGuard] },
  { path: 'perfil/:userId', component: PerfilUsuarioComponent, canActivate: [LoginGuard] },
  { path: '**', component: C404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
