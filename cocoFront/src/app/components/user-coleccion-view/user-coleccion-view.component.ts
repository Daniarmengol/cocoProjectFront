import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-user-coleccion-view',
  templateUrl: './user-coleccion-view.component.html',
  styleUrls: ['./user-coleccion-view.component.css']
})
export class UserColeccionViewComponent implements OnInit {

  productos: any[] = [];

  constructor(
    private productosServices: ProductosService
  ) { }

  ngOnInit(): void {
  }

}
