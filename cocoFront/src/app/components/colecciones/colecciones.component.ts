import { Component, OnInit } from '@angular/core';
import { Coleccion } from 'src/app/interfaces/coleccion.interface';

@Component({
  selector: 'app-colecciones',
  templateUrl: './colecciones.component.html',
  styleUrls: ['./colecciones.component.css']
})
export class ColeccionesComponent implements OnInit {

  coleccion: Coleccion[] | any = []

  constructor() { }

  ngOnInit(): void {
  }



}
