import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Producto } from '../../interfaces/producto.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  editForm: FormGroup | any;
  imgProd: string = "";
  producto: Observable<Producto[]> | any

  constructor(
    private productosService: ProductosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location

  ) {
    this.editForm = new FormGroup({
      nombre: new FormControl([
        Validators.required
      ]),
      precio: new FormControl([]),
      categoria: new FormControl([Validators.required]),
      imagen: new FormControl([]),
      estado: new FormControl([Validators.required]),
      descripcion: new FormControl([]),

    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {

      this.producto = await this.productosService.getById(params.productoId);
      this.imgProd = this.producto.imagen;
      console.log(this.producto)

      this.editForm.patchValue({
        nombre: this.producto.nombre,
        precio: this.producto.precio,
        categoria: this.producto.categoria,
        imagen: this.producto.imagen,
        estado: this.producto.estado,
        descripcion: this.producto.descripcion
      })

    })
  }

  backClick() {
    this.location.back()
  }

  async getDataForm(editForm: any) {
    const id = this.producto.id
    try {
      const response = await this.productosService.editarProducto(id, editForm.value);


      if (response.error) {
        Swal.fire({
          icon: 'error',
          title: '¡Uy!',
          text: 'Ha habido un problema, vuelve a intentarlo.',
          timer: 2500
        })
      } else {
        Swal.fire({
          icon: 'success',
          title: '¡Producto editado!',
          text: '¡Producto editado correctamente!',
          timer: 2500
        })
        setTimeout(() => {
          this.router.navigate(['/perfil', this.producto.usuario_id])
        }, 3000);
      }
    } catch (err) {
      console.log(err);
    }

  }

  loadAvatar(avatar: any) {
    console.log(avatar);

    this.imgProd = avatar.target.value;
  }
}
