import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { User } from 'src/app/interfaces/user.interface';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];
  usuarios: User[] = [];


  constructor(
    private productosService: ProductosService,
  ) {

  }

  async ngOnInit(): Promise<Producto[] | void> {
    this.productos = await this.productosService.getUserByProducto();
  }

  onSubmit(formValue: any): void {
    console.log(formValue)
  }




}
