import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coleccion } from 'src/app/interfaces/coleccion.interface';
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
  coleccion: Coleccion | any


  constructor(
    private _productosServices: ProductosService,
    private _coleccionesServices: ColeccionesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(async (params: any) => {
      this.productosColeccion = await this._coleccionesServices.getByCodigo(params.codigo)
      this.coleccion = params.codigo
      console.log(this.coleccion)

    })

  }

  async borrar(codigo: string) {
    await this._coleccionesServices.borrar(codigo)
    this.router.navigate(['/perfil'])

  }


}
