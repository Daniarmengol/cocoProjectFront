import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ColeccionesService } from 'src/app/services/colecciones.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-user-coleccion-view',
  templateUrl: './user-coleccion-view.component.html',
  styleUrls: ['./user-coleccion-view.component.css']
})
export class UserColeccionViewComponent implements OnInit {

  productosColeccion: any[] = []
  productos: Producto[] = []


  constructor(
    private _productosServices: ProductosService,
    private _coleccionesServices: ColeccionesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(async (params: any) => {
      this.productosColeccion = await this._coleccionesServices.getByCodigo(params.codigo)

      console.log(this.productosColeccion)

    })

  }



}
