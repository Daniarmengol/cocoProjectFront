import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as dayjs from 'dayjs';
import { Producto } from 'src/app/interfaces/producto.interface';
import { User } from 'src/app/interfaces/user.interface';
import { ColeccionesService } from 'src/app/services/colecciones.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-collection-form',
  templateUrl: './new-collection-form.component.html',
  styleUrls: ['./new-collection-form.component.css']
})
export class NewCollectionFormComponent implements OnInit {

  nuevaColeccionForm: FormGroup | any;
  arrayProductos: Producto[] = [];
  myUser: User | any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private coleccionesService: ColeccionesService
  ) {
    this.nuevaColeccionForm = new FormGroup({
      titulo: new FormControl((""), [Validators.required]),
      categoria: new FormControl((""), [Validators.required]),
      producto_id: new FormControl(),
      usuario_id: new FormControl(),
      codigo: new FormControl()
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {
      this.arrayProductos = await this.usersService.getProductosByUser(params.userId)
      this.myUser = await this.usersService.getUserByToken()
      this.nuevaColeccionForm.patchValue({
        usuario_id: this.myUser.id
      })
    })
    // console.log(this.arrayProductos)
  }

  async getDataForm(nuevaColeccionForm: any) {
    this.nuevaColeccionForm.patchValue({
      codigo: nuevaColeccionForm.value.titulo + ' ' + dayjs().unix()
    })
    console.log(nuevaColeccionForm.value)
    try {
      const response: any = await this.coleccionesService.createNewCollection(nuevaColeccionForm.value)
      console.log(response);

    } catch (err) {
      console.log(err);

    }
  }

}
