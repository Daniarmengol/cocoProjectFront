
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { UsersService } from 'src/app/services/users.service';
import { Producto } from 'src/app/interfaces/producto.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  productoForm: FormGroup | any;
  myId: number = 0;
  @Input() product: any = {};

  constructor(
    private productosService: ProductosService,
    private usersService: UsersService,
    private router: Router
  ) {
    this.productoForm = new FormGroup({
      usuario_id: new FormControl(),
      nombre: new FormControl('', []),
      precio: new FormControl(0, []),
      categoria: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl('', []),
      marca: new FormControl('', []),
      estado: new FormControl('', [
        Validators.required
      ]),
      descripcion: new FormControl('', [])
    })
  }

  // ngOnInit(): void {



  // }

  async ngOnInit(): Promise<void> {
    const myUser = await this.usersService.getUserByToken()
    // console.log(myUser)
    this.productoForm.patchValue({
      usuario_id: myUser.id
    })
    this.checkProductInfo();
  }

  async checkProductInfo() {
    if (this.product !== {}) {
      this.productoForm.patchValue(this.product);
    }
  }

  async getDataForm(productoForm: any) {
    const myUser = await this.usersService.getUserByToken()
    try {
      const response: any = await this.productosService.addProducto(this.productoForm.value)
      console.log(response);
      const msg = (response.success) ? response.success : response.error;
      // alert(msg); // sweet alerts usuario duplicado
      if (response.error) {
        Swal.fire({
          title: 'Ha habido un error!',
          icon: 'error',
          text: 'Revisa que todo esté correcto y vuelve a intentarlo.',
          timer: 5000
        })
      } else {
        Swal.fire({
          title: 'Producto añadido!',
          icon: 'success',
          text: 'Producto creado satisfactoriamente.',
          timer: 5000
        })
      }

    } catch (error) {
      console.log(error)
    }

  }


}
