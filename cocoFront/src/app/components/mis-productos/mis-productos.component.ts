import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.component.html',
  styleUrls: ['./mis-productos.component.css']
})
export class MisProductosComponent implements OnInit {
  misProductos: any[] = []

  constructor(
    private productosService: ProductosService,
    private activatedRoute: ActivatedRoute
  ) { }

  /* async ngOnInit(): Promise<Producto[] | void> {
    console.log(this.activatedRoute.params)
    this.misProductos = await this.productosService.getById(id)
  } */
  ngOnInit() {
    console.log()
  }

}
