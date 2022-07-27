import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  productoForm: FormGroup | any;

  constructor() {
    this.productoForm = new FormGroup({
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
    })
  }

  ngOnInit(): void {
  }

  getDataForm() {
    console.log(this.productoForm.value)
  }
}
