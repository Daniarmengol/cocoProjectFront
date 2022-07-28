import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  productoForm: FormGroup | any;
  myId: number = 0;

  constructor(
    private productosService: ProductosService,
    private usersService: UsersService
  ) {



    this.productoForm = new FormGroup({
      usuario_id: new FormControl(this.myId, []),
      nombre: new FormControl('', [
        Validators.required
      ]),
      precio: new FormControl('', []),
      categoria: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl('', []),
      marca: new FormControl('', []),
      estado: new FormControl('', [
        Validators.required
      ]),
      descripcion: new FormControl('', [
        Validators.required
      ])
    })
  }

  async ngOnInit(): Promise<void> {
    const myUser = await this.usersService.getUserByToken()
    this.myId = myUser.id
  }

  async getDataForm(productoForm: any) {
    try {
      const response: any = await this.productosService.addProducto(this.productoForm.value)
      console.log(response);
      const msg = (response.success) ? response.success : response.error;
      // alert(msg); // sweet alerts usuario duplicado
      Swal.fire({
        title: 'Ha habido un error!',
        icon: 'error',
        text: msg,
        timer: 3000
      })
    } catch (error) {
      console.log(error)
    }

  }
}
