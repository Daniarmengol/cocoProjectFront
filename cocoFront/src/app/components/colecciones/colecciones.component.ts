import { Component, OnInit } from '@angular/core';
import { FullCollection } from 'src/app/interfaces/coleccionComplete.interface';
import { ColeccionesService } from 'src/app/services/colecciones.service';

@Component({
  selector: 'app-colecciones',
  templateUrl: './colecciones.component.html',
  styleUrls: ['./colecciones.component.css']
})
export class ColeccionesComponent implements OnInit {

  colecciones!: FullCollection[];

  constructor(private _coleccionesService: ColeccionesService) { }

  ngOnInit(): void {
    this.getLastCollections();
  }

  async getLastCollections() {
    this.colecciones = await this._coleccionesService.getLastCollections();
    console.log('Ultimas colecciones -> ', this.colecciones)
  }
}
