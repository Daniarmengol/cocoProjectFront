import { Component, OnInit, Input } from '@angular/core';
import { Coleccion } from 'src/app/interfaces/coleccion.interface';
import { FullCollection } from 'src/app/interfaces/coleccionComplete.interface';
import { User } from 'src/app/interfaces/user.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.css']
})
export class CollectionCardComponent implements OnInit {

  @Input() coleccion!: FullCollection;
  defaultImg = 'https://assets.codepen.io/460692/internal/avatars/users/default.png';
  usuario: User | any = ''
  imagen: string = '';

  constructor(private _productosService: ProductosService) { }

  ngOnInit(): void {
    this.getProductoInfo();
  }



  async getProductoInfo() {
    let producto;
    producto = await this._productosService.getById(this.coleccion.producto_id);
    this.imagen = producto.imagen;
    console.log('Llega la imagen', this.imagen);

  }

}
