import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-collection-form',
  templateUrl: './new-collection-form.component.html',
  styleUrls: ['./new-collection-form.component.css']
})
export class NewCollectionFormComponent implements OnInit {

  nuevaColeccionForm: FormGroup | any;
  arrayProductos: Producto[] = [];
  constructor(private activatedRoute: ActivatedRoute,
    private usersService: UsersService) {
    this.nuevaColeccionForm = new FormGroup({
      titulo: new FormControl((""), [Validators.required]),
      categoria: new FormControl((""), [Validators.required]),
      producto_id: new FormControl()
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {
      this.arrayProductos = await this.usersService.getProductosByUser(params.userId)
    })
    console.log(this.arrayProductos)
  }

  getDataForm(nuevaColeccionForm: any) {
    console.log(nuevaColeccionForm.value)

  }

  pruebadatos(dato: any) {
    let data = dato.getAttribute("producto_id")
    console.log(data)
  }

}
