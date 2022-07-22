import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-producto-view',
  templateUrl: './producto-view.component.html',
  styleUrls: ['./producto-view.component.css']
})
export class ProductoViewComponent implements OnInit {

  seccionActual: string = 'informacion_producto'
  miProducto: Observable<Producto> | any

  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {
      this.miProducto = await this.productosService.getById(params.id)
    })
  }

  cargarInformacion(informacion: string): void {
    this.seccionActual = informacion
  }

}
