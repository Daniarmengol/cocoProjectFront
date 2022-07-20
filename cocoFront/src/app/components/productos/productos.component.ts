import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { User } from 'src/app/interfaces/user.interface';
import { ProductosService } from 'src/app/services/productos.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  usuarios: User[] = [];
  cardUser: User[] = [];
  trustedOn: boolean = false;

  constructor(
    private productosService: ProductosService,
    private usersService: UsersService
  ) {

  }

  async ngOnInit(): Promise<Producto[] | void> {
    this.productos = await this.productosService.getAll()
    this.usuarios = await this.usersService.getAll()

  }

  onSubmit(formValue: any): void {
    console.log(formValue)
  }




}
