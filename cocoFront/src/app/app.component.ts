// import { IfStmt } from '@angular/compiler'; No lo estábamos usando, voy a comentarlo pero borramos a futuro si no da errores.
import { Component } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cocoFront';
  currentRoute: string;
  rutas: string[] = ['/login', '/registro']
  transversalesOn: boolean = false;


  /*DEPENDIENDO DE LA RUTA MUESTRE O NO EL COMPONENTE HEADER/FOOTER
  https://www.angularjswiki.com/angular/how-to-detect-route-change-in-angular-with-examples/ */
  constructor(private router: Router) {
    this.currentRoute = "";

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        /* console.log(this.currentRoute) */
        if (this.rutas.includes(this.currentRoute)) {
          this.transversalesOn = false
        } else {
          this.transversalesOn = true
        }
      }
    })
  }
}
