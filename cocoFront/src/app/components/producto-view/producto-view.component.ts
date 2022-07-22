import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-view',
  templateUrl: './producto-view.component.html',
  styleUrls: ['./producto-view.component.css']
})
export class ProductoViewComponent implements OnInit {

  seccionActual: string = 'informacion_producto'

  constructor() { }

  ngOnInit(): void {
  }

  cargarInformacion(informacion: string): void {
    this.seccionActual = informacion
  }

}
